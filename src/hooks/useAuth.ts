/* eslint-disable react-hooks/rules-of-hooks */

import { useContextSelector } from 'use-context-selector'

import { AuthContext } from 'contexts/AuthContext'

const sessions = () => {
  const signIn = useContextSelector(AuthContext, state => state.signIn)
  const signOut = useContextSelector(AuthContext, state => state.signOut)

  if (signIn === undefined || signOut === undefined) {
    throw new Error('useAuth.sessions must be used within an AuthProvider from contexts.')
  }

  return {
    signIn,
    signOut,
  }
}

const current = () => {
  const user = useContextSelector(AuthContext, state => state.user)

  if (user === undefined) {
    throw new Error('useAuth.current must be used within an AuthProvider from contexts.')
  }

  return {
    user,
  }
}

const sessionValidation = () => {
  const isRevalidatingUser = useContextSelector(
    AuthContext,
    state => state.isRevalidatingUser
  )

  if (isRevalidatingUser === undefined) {
    throw new Error(
      'useAuth.sessionValidation must be used within an AuthProvider from contexts.'
    )
  }

  return {
    isRevalidatingUser,
  }
}

const useAuth = {
  sessions,
  current,
  sessionValidation,
}

export default useAuth
