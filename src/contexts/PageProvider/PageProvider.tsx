import { useMemo } from 'react'

import merge from 'lodash/merge'

import DynamicPageProvider from 'contexts/PageProvider/DynamicPageProvider'
import { removeEmpty } from 'utils/dataStructures/objects'
import { sanitizeTheme } from 'utils/theme'

import defaultBusinessInfo from 'settings/defaultBusinessInfo'
import defaultTheme from 'theme/globalTheme'

import { PageProviderProps } from 'types/pageProps'

const PageProvider = ({
  children,
  currentLocale,
  businessSettings,
}: PageProviderProps) => {
  const businessSettingsTheme = businessSettings?.theme
  const businessSettingsBusinessInfo = businessSettings?.businessInfo

  const theme = useMemo(() => {
    if (businessSettingsTheme) {
      const mergedBusinessFromProvider = merge(
        {},
        defaultTheme,
        sanitizeTheme(removeEmpty(businessSettingsTheme))
      )

      return mergedBusinessFromProvider
    }

    return defaultTheme
  }, [defaultTheme, businessSettingsTheme])

  const businessInfo = useMemo(() => {
    if (businessSettingsBusinessInfo) {
      return merge({}, defaultBusinessInfo, removeEmpty(businessSettingsBusinessInfo))
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
