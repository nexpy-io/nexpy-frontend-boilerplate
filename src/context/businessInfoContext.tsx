import { createContext, useContext, ReactNode } from 'react'

import { BusinessInfo } from 'types/businessSettings'

const BusinessInfoContext = createContext<BusinessInfo | null>(null)

const useBusinessInfo = () => {
  const context = useContext(BusinessInfoContext)

  if (context === undefined) {
    throw new Error(
      'useBusinessInfo must be used within an BusinessInfoProvider.'
    )
  }

  return context
}

type LocaleProviderProps = {
  businessInfo: BusinessInfo
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BusinessInfoProvider = ({
  businessInfo,
  children,
  ...props
}: LocaleProviderProps) => {
  return (
    <BusinessInfoContext.Provider value={businessInfo} {...props}>
      {children}
    </BusinessInfoContext.Provider>
  )
}

export { BusinessInfoProvider, useBusinessInfo }
