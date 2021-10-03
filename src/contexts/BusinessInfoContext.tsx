import { createContext, ReactNode } from 'react'

import { BusinessInfo } from 'types/businessSettings'

type BusinessInfoProviderProps = {
  businessInfo: BusinessInfo
  children: ReactNode
}

export const BusinessInfoContext = createContext({} as BusinessInfo)

export const BusinessInfoProvider = ({
  businessInfo,
  children,
}: BusinessInfoProviderProps) => (
  <BusinessInfoContext.Provider value={businessInfo}>
    {children}
  </BusinessInfoContext.Provider>
)
