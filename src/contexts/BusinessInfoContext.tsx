import { createContext, PropsWithChildren } from 'react'

import { BusinessInfo } from 'types/businessSettings'

type BusinessInfoProviderProps = PropsWithChildren<{
  businessInfo: BusinessInfo
}>

export const BusinessInfoContext = createContext({} as BusinessInfo)

export const BusinessInfoProvider = ({
  businessInfo,
  children,
}: BusinessInfoProviderProps) => (
  <BusinessInfoContext.Provider value={businessInfo}>
    {children}
  </BusinessInfoContext.Provider>
)
