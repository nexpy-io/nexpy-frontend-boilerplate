import { ReactNode } from 'react'

import { BusinessSettings } from 'types/businessSettings'
import { LocaleKeys } from 'types/locales'

export type PartialBusinessSettings = Partial<BusinessSettings>

export type PageProps = {
  currentLocale: LocaleKeys
  businessSettings?: PartialBusinessSettings
}

export type PageProviderProps = {
  children?: ReactNode
} & PageProps
