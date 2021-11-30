import { useState, useMemo } from 'react'

import { usePossibleErrorHandler } from 'hooks'
import useSWR from 'swr'

import PageProviderComposer from 'contexts/PageProvider/PageProviderComposer'
import { businessSettingsService } from 'services/clientSide/businessSettings'

import { deepMergeWithPreProcessors, removeEmpty } from 'utils/dataStructures/objects'
import { sanitizeTheme } from 'utils/theme'

import defaultBusinessInfo from 'settings/defaultBusinessInfo'
import defaultTheme from 'theme/globalTheme'

import { BusinessInfo, BusinessSettings } from 'types/businessSettings'
import { PageProviderProps, PartialBusinessSettings } from 'types/pageProps'
import { Theme } from 'types/theme'

type CurrentBusinessSettings = PartialBusinessSettings | undefined

const PageProvider = ({
  children,
  currentLocale,
  businessSettings,
}: PageProviderProps) => {
  const [currentRevalidatedBusinessSettings, setCurrentRevalidatedBusinessSettings] =
    useState<CurrentBusinessSettings>(businessSettings)

  const ssrProvidedBusinessName = businessSettings?.businessInfo?.core.businessUniqueLabel

  const currentRevalidatedTheme = currentRevalidatedBusinessSettings?.theme
  const currentResvalidatedBusinessInfo = currentRevalidatedBusinessSettings?.businessInfo

  const { data: revalidatedBusinessSettings, error: businessSettingsRevalidationError } =
    useSWR(
      () => `swr/businessData/revalidation<${ssrProvidedBusinessName || 'unknown'}>`,
      () => {
        if (ssrProvidedBusinessName) {
          return businessSettingsService(ssrProvidedBusinessName)
        }

        return undefined
      }
    )

  const revalidatedBusinessInfoData = revalidatedBusinessSettings?.data

  const theme = useMemo<Theme>(() => {
    if (currentRevalidatedTheme) {
      return deepMergeWithPreProcessors<Theme>(defaultTheme, currentRevalidatedTheme, [
        removeEmpty,
        sanitizeTheme,
      ])
    }

    return defaultTheme
  }, [currentRevalidatedTheme])

  const businessInfo = useMemo<BusinessInfo>(() => {
    if (currentResvalidatedBusinessInfo) {
      return deepMergeWithPreProcessors<BusinessInfo>(
        defaultBusinessInfo,
        currentResvalidatedBusinessInfo,
        [removeEmpty]
      )
    }

    return defaultBusinessInfo
  }, [currentResvalidatedBusinessInfo])

  usePossibleErrorHandler<BusinessSettings>({
    error: businessSettingsRevalidationError,
    successValue: revalidatedBusinessInfoData,
    onSuccess: successValue => {
      setCurrentRevalidatedBusinessSettings(successValue)
    },
  })

  return (
    <PageProviderComposer
      theme={theme}
      locale={currentLocale}
      businessInfo={businessInfo}
    >
      {children}
    </PageProviderComposer>
  )
}

export default PageProvider
