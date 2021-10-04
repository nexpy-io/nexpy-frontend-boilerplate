import { useMemo } from 'react'

import merge from 'lodash/merge'

import DynamicPageProvider from 'contexts/PageProvider/DynamicPageProvider'
import { isUsingBusinessSettingsProvider } from 'utils/businessSettings'
import { sanitizeTheme } from 'utils/theme'

import userSettingsMock from 'mocks/businessSettings'
import defaultBusinessInfo from 'settings/defaultBusinessInfo'
import defaultTheme from 'theme/globalTheme'

import { PageProviderProps } from 'types/pageProps'

const getBusinessSettings = () => {
  if (isUsingBusinessSettingsProvider) {
    return userSettingsMock
  }

  return null
}

const PageProvider = ({ children, currentLocale }: PageProviderProps) => {
  const businessSettings = getBusinessSettings()

  const businessSettingsTheme = businessSettings?.theme
  const businessSettingsBusinessInfo = businessSettings?.businessInfo

  const theme = useMemo(() => {
    if (businessSettingsTheme) {
      const mergedBusinessFromProvider = merge(
        {},
        defaultTheme,
        sanitizeTheme(businessSettingsTheme)
      )

      return mergedBusinessFromProvider
    }

    return defaultTheme
  }, [defaultTheme, businessSettingsTheme])

  const businessInfo = useMemo(() => {
    if (businessSettingsBusinessInfo) {
      return merge({}, defaultBusinessInfo, businessSettingsBusinessInfo)
    }

    return defaultBusinessInfo
  }, [defaultBusinessInfo, businessSettingsBusinessInfo])

  return (
    <DynamicPageProvider theme={theme} locale={currentLocale} businessInfo={businessInfo}>
      {children}
    </DynamicPageProvider>
  )
}

export default PageProvider
