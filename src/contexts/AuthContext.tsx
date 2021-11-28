import { useRouter } from 'next/router'
import { createContext, useState, useEffect, useCallback, ReactNode } from 'react'

import merge from 'lodash/merge'
import useSWR from 'swr'

import { DEFAULT_LOGIN_PAGE_REDIRECT_PATH } from 'constants/auth'
import { nexpyClientSideClient } from 'providers'
import {
  signInService,
  revalidateUserService,
  refreshUserService,
} from 'services/clientSide/auth'
import { removeEmpty } from 'utils/dataStructures/objects'
import {
  clearCurrentSessionCookie,
  clearCurrentRefreshCookie,
  getAuthTokenOrUndefined,
  getRefreshTokenOrUndefined,
  writeSessionCookie,
  writeRefreshCookie,
} from 'utils/sessions'

import { User, AuthContextValue, SignIn } from 'types/auth'

type AuthProviderProps = {
  children: ReactNode
}

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
    isValidating,
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

  const registerSession = useCallback(
    (userData: User) => {
      const currentToken = userData.auth?.token
      const currentRefreshToken = userData.auth?.refreshToken

      if (nexpyClientSideClient.defaults.headers && currentToken) {
        nexpyClientSideClient.defaults.headers.Authorization = `Bearer ${currentToken}`
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
    },
    [nexpyClientSideClient]
  )

  const signIn = useCallback(async ({ email, password }: SignIn) => {
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
    }
  }, [])

  const signOut = useCallback(
    (redirectPath?: string) => {
      setUserCredentials(null)
      clearCurrentSessionCookie()
      clearCurrentRefreshCookie()
      setUser(null)

      if (nexpyClientSideClient.defaults.headers) {
        nexpyClientSideClient.defaults.headers.Authorization =
          'STATUS_UNAUTHENTICATED_FORCE_ERROR'
      }

      if (router.pathname !== DEFAULT_LOGIN_PAGE_REDIRECT_PATH) {
        router.push(redirectPath || DEFAULT_LOGIN_PAGE_REDIRECT_PATH)
      }
    },
    [unobfuscatedToken, router]
  )

  const performRefreshRevalidation = useCallback(() => {
    if (userCredentials) {
      try {
        signIn(userCredentials)

        return
        // eslint-disable-next-line no-empty
      } catch {}
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
  }, [userCredentials])

  useEffect(() => {
    if (userRevalidationError) {
      performRefreshRevalidation()

      return
    }

    if (revalidatedUserData) {
      registerSession(revalidatedUserData.data)
    }
  }, [revalidatedUserData, userRevalidationError])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isRevalidatingUser: isValidating,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
