/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, ReactNode } from 'react'

import { createContext } from 'use-context-selector'

import { AuthData, User, Auth } from 'types/auth'

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as Auth)

export const AuthProvider = ({ children, ...props }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthData>(null)
  const [user, setUser] = useState<User>(null)

  const signIn = async () => {}

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
      }}
      {...props}
    >
      {children}
    </AuthContext.Provider>
  )
}
