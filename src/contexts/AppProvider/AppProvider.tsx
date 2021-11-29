import { AuthProvider } from 'contexts/AuthContext'

import { DefaultComponentProps } from 'types/components'

type AppProviderProps = DefaultComponentProps

const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>{children}</AuthProvider>
)

export default AppProvider
