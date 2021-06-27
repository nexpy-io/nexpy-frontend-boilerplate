import { useContextSelector } from 'use-context-selector'

import { AuthContext } from 'contexts/AuthContext'

const useAuth = () => {
  const auth = useContextSelector(AuthContext, authData => authData.auth)
  const user = useContextSelector(AuthContext, authData => authData.user)

  if ([auth, user].some(contextData => contextData === undefined)) {
    throw new Error(
      'useAuth must be used within an AuthProvider from contexts.'
    )
  }

  return { auth, user }
}

export default useAuth
