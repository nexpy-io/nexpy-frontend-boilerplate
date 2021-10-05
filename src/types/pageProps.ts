import { ReactNode } from 'react'

import { BusinessSettings } from 'types/businessSettings'
import { LocaleKeys } from 'types/locales'

type PartialBusinessSettings = Partial<BusinessSettings>

export type PageProviderProps = {
  currentLocale: LocaleKeys
  businessSettings: PartialBusinessSettings
  children?: ReactNode
}

export type PageProps = {
  currentLocale: LocaleKeys
  businessSettings: PartialBusinessSettings
}
