import AppProvider from 'contexts/AppProvider'

import { PageProps } from 'types/pageProps'

import userSettingsMock from 'mocks/businessSettings'

const PageWrapper = ({ children, currentLocale }: PageProps) => {
  const businessSettings = userSettingsMock

  return (
    <AppProvider
      theme={businessSettings.theme}
      locale={currentLocale}
      businessInfo={businessSettings.businessInfo}
    >
      {children}
    </AppProvider>
  )
}

export default PageWrapper
