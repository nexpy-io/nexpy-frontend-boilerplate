import { ReactNode } from 'react'

import { AuthProvider } from 'contexts/AuthContext'

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>{children}</AuthProvider>
)

export default AppProvider
