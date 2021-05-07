import { AvailableLocaleKeys } from 'components/Translate'

import { UserSettings } from 'types/userSettings'

export type PageProps = {
  currentLocale: AvailableLocaleKeys
  userSettings: UserSettings
}
