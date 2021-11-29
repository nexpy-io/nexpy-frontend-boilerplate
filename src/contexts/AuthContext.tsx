import { useRouter } from 'next/router'
import { createContext, useState, useEffect, useCallback, useMemo } from 'react'

import merge from 'lodash/merge'
import useSWR from 'swr'

import { nexpyClientSideClient } from 'providers'
import {
  signInService,
  revalidateUserService,
  refreshUserService,
} from 'services/clientSide/auth'

import { DEFAULT_LOGIN_PAGE_REDIRECT_PATH } from 'constants/auth'
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

  const unobfuscatedToken = getAuthTokenOrUndefined()
  const isAuthenticated = !!user

  const router = useRouter()

  const {
    data: revalidatedUserData,
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

      if (router.pathname !== DEFAULT_LOGIN_PAGE_REDIRECT_PATH) {
        router.push(redirectPath || DEFAULT_LOGIN_PAGE_REDIRECT_PATH)
      }
    },
    [router]
  )

  const performRefreshRevalidation = useCallback(() => {
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
  }, [registerSession, signIn, signOut, userCredentials])

  const memoValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      isRevalidatingUser,
      signIn,
      signOut,
    }),
    [isAuthenticated, isRevalidatingUser, signIn, signOut, user]
  )

  useEffect(() => {
    if (userRevalidationError) {
      performRefreshRevalidation()

      return
    }

    if (revalidatedUserData) {
      registerSession(revalidatedUserData.data)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revalidatedUserData, userRevalidationError])

  return <AuthContext.Provider value={memoValue}>{children}</AuthContext.Provider>
}
