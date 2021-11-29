import { useState, useEffect, useMemo } from 'react'

import merge from 'lodash/merge'
import useSWR from 'swr'

import DynamicPageProvider from 'contexts/PageProvider/DynamicPageProvider'
import { businessSettingsService } from 'services/clientSide/businessSettings'

import { removeEmpty } from 'utils/dataStructures/objects'
import { captureException } from 'utils/sentry'
import { sanitizeTheme } from 'utils/theme'

import defaultBusinessInfo from 'settings/defaultBusinessInfo'
import defaultTheme from 'theme/globalTheme'

import { PageProviderProps, PartialBusinessSettings } from 'types/pageProps'

type CurrentBusinessInfo = PartialBusinessSettings | undefined

const PageProvider = ({
  children,
  currentLocale,
  businessSettings,
}: PageProviderProps) => {
  const [currentBusinessInfo, setCurrentBusinessInfo] =
    useState<CurrentBusinessInfo>(businessSettings)

  const ssrProvidedBusinessName = businessSettings?.businessInfo?.core.businessName
  const businessSettingsTheme = currentBusinessInfo?.theme
  const businessSettingsBusinessInfo = currentBusinessInfo?.businessInfo

  const { data: revalidatedBusinessInfo, error: businessInfoRevalidationError } = useSWR(
    () => `swr/businessData/revalidation<${ssrProvidedBusinessName || 'unknown'}>`,
    () => {
      if (ssrProvidedBusinessName) {
        return businessSettingsService(ssrProvidedBusinessName)
      }

      return undefined
    }
  )

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
  }, [businessSettingsTheme])

  const businessInfo = useMemo(() => {
    if (businessSettingsBusinessInfo) {
      return merge({}, defaultBusinessInfo, removeEmpty(businessSettingsBusinessInfo))
    }

    return defaultBusinessInfo
  }, [businessSettingsBusinessInfo])

  useEffect(() => {
    if (businessInfoRevalidationError) {
      captureException(businessInfoRevalidationError)

      return
    }

    const revalidatedBusinessInfoData = revalidatedBusinessInfo?.data

    if (revalidatedBusinessInfoData) {
      setCurrentBusinessInfo(revalidatedBusinessInfoData)
    }
  }, [revalidatedBusinessInfo, businessInfoRevalidationError])

  return (
    <DynamicPageProvider theme={theme} locale={currentLocale} businessInfo={businessInfo}>
      {children}
    </DynamicPageProvider>
  )
}

export default PageProvider
