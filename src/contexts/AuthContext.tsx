import { useRouter } from 'next/router'
import { useState, useCallback, useEffect } from 'react'

import { usePossibleErrorHandler } from 'hooks'
import merge from 'lodash/merge'
import useSWR from 'swr'
import { createContext } from 'use-context-selector'

import { nexpyClientSideClient } from 'providers'
import {
  signInService,
  revalidateUserService,
  refreshUserService,
} from 'services/clientSide/auth'

import {
  DEFAULT_LOGIN_PAGE_REDIRECT_PATH,
  REFRESH_REVALIDATION_MAX_ATTEMPTS,
} from 'constants/auth'
import { removeEmpty } from 'utils/dataStructures/objects'
import {
  clearCurrentSessionCookie,
  clearCurrentRefreshCookie,
  getAuthTokenOrUndefined,
  getRefreshTokenOrUndefined,
  writeSessionCookie,
  writeRefreshCookie,
  assignAuthorizationHeaderValue,
  clearAuthorizationHeaderValue,
} from 'utils/sessions'

import { User, AuthContextValue, SignIn, SignInResolver } from 'types/auth'
import { DefaultComponentProps } from 'types/components'

type AuthProviderProps = DefaultComponentProps

export const AuthContext = createContext({} as AuthContextValue)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [userCredentials, setUserCredentials] = useState<SignIn | null>(null)
  const [refreshRevalidationAttempts, setRefreshRevalidationAttempts] =
    useState<number>(0)

  const unobfuscatedToken = getAuthTokenOrUndefined()
  const isAuthenticated = !!user
  const isMaxRefreshAttemptsExceeded =
    refreshRevalidationAttempts > REFRESH_REVALIDATION_MAX_ATTEMPTS

  const router = useRouter()

  const {
    data: revalidatedUser,
    error: userRevalidationError,
    isValidating: isRevalidatingUser,
  } = useSWR(
    () =>
      `swr/user/revalidation|Token<${
        unobfuscatedToken || user?.auth?.token || 'unknown'
      }>`,
    () => {
      const currentUnobfuscatedToken = getAuthTokenOrUndefined()

      if (currentUnobfuscatedToken) {
        return revalidateUserService(currentUnobfuscatedToken)
      }

      return undefined
    }
  )

  const revalidatedUserData = revalidatedUser?.data

  const registerSession = useCallback((userData: User) => {
    const currentToken = userData.auth?.token
    const currentRefreshToken = userData.auth?.refreshToken

    if (currentToken) {
      assignAuthorizationHeaderValue(nexpyClientSideClient, currentToken)
      writeSessionCookie(currentToken)
    }

    if (currentRefreshToken) {
      writeRefreshCookie(currentRefreshToken)
    }

    setUser(prevState => {
      if (prevState) {
        return merge({}, prevState, removeEmpty(userData))
      }

      return userData
    })
  }, [])

  const signIn = useCallback(
    async ({ email, password, onSuccess, onError }: SignInResolver) => {
      try {
        const { data: userData } = await signInService({
          email,
          password,
        })

        if (userData) {
          setUserCredentials({
            email,
            password,
          })
          registerSession(userData)

          if (onSuccess) {
            onSuccess(userData)
          }
        }
      } catch (error) {
        if (onError) {
          onError(error)
        }
      }
    },
    [registerSession]
  )

  const signOut = useCallback(
    (redirectPath?: string) => {
      clearCurrentSessionCookie()
      clearCurrentRefreshCookie()
      clearAuthorizationHeaderValue(nexpyClientSideClient)

      setUserCredentials(null)
      setUser(null)

      if (redirectPath) {
        router.push(redirectPath)

        return
      }

      if (router.pathname !== DEFAULT_LOGIN_PAGE_REDIRECT_PATH) {
        router.push(DEFAULT_LOGIN_PAGE_REDIRECT_PATH)
      }
    },
    [router]
  )

  const performRefreshRevalidation = useCallback(() => {
    setRefreshRevalidationAttempts(state => state + 1)

    if (userCredentials) {
      try {
        signIn(userCredentials)

        return
      } catch {
        signOut()
      }
    }

    const currentRefreshToken = getRefreshTokenOrUndefined()

    if (!currentRefreshToken) {
      signOut()

      return
    }

    const resolveRefreshValidation = async () => {
      try {
        const { data: refreshedUserData } = await refreshUserService(currentRefreshToken)

        registerSession(refreshedUserData)
      } catch {
        signOut()
      }
    }

    resolveRefreshValidation()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSession, signIn, signOut, userCredentials])

  usePossibleErrorHandler<User>({
    error: userRevalidationError,
    successValue: revalidatedUserData,
    reportException: false,
    onError: () => {
      if (!isMaxRefreshAttemptsExceeded) {
        performRefreshRevalidation()
      }
    },
    onSuccess: successValue => {
      setRefreshRevalidationAttempts(0)
      registerSession(successValue)
    },
  })

  useEffect(() => {
    if (isMaxRefreshAttemptsExceeded) {
      signOut()
    }
  }, [isMaxRefreshAttemptsExceeded, signOut])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isRevalidatingUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
