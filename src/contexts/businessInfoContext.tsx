import { createContext, ReactNode } from 'react'

import { BusinessInfo } from 'types/businessSettings'

type BusinessInfoProviderProps = {
  businessInfo: BusinessInfo
  children: ReactNode
}

export const BusinessInfoContext = createContext<BusinessInfo | null>(null)

export const BusinessInfoProvider = ({
  businessInfo,
  children,
  ...props
}: BusinessInfoProviderProps) => {
  return (
    <BusinessInfoContext.Provider value={businessInfo} {...props}>
      {children}
    </BusinessInfoContext.Provider>
  )
}
