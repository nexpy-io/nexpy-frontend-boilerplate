import { LocaleKeys } from 'types/locales'

import { BusinessSettings } from 'types/businessSettings'

export type PageProps = {
  currentLocale: LocaleKeys
  businessSettings: BusinessSettings
}
