import { createContext, useState, useEffect, ReactNode } from 'react'

import { nexpyClientSideApi } from 'providers'
import {
  clearCurrentSessionCookie,
  getAuthTokenOrUndefined,
  writeSessionCookie,
} from 'utils/sessions'

import { User, AuthContextValue, SignIn } from 'types/auth'

import { recoverUserInfoMockRequest, signInMockRequest } from 'mocks/services'

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextValue)

export const AuthProvider = ({ children, ...props }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isRevalidatingUser, setIsRevalidatingUser] = useState<boolean>(true)

  const isAuthenticated = !!user

  const registerSession = (userData: User) => {
    const currentToken = userData.auth.token

    nexpyClientSideApi.defaults.headers.Authorization = `Bearer ${currentToken}`

    writeSessionCookie(currentToken)
    setUser(userData)
  }

  const signIn = async ({ email, password }: SignIn) => {
    const userData = await signInMockRequest({
      email,
      password,
    })

    if (userData) {
      registerSession(userData)
    }
  }

  const signOut = () => {
    clearCurrentSessionCookie()
    setUser(null)
  }

  useEffect(() => {
    const unobfuscatedToken = getAuthTokenOrUndefined()

    const fetchUser = async () => {
      try {
        if (unobfuscatedToken) {
          const responseUserData = await recoverUserInfoMockRequest(unobfuscatedToken)

          registerSession(responseUserData)
        }
      } catch {
        signOut()
      } finally {
        setIsRevalidatingUser(false)
      }
    }

    fetchUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isRevalidatingUser,
        signIn,
        signOut,
      }}
      {...props}
    >
      {children}
    </AuthContext.Provider>
  )
}
