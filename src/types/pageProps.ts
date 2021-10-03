import { ReactNode } from 'react'

import { LocaleKeys } from 'types/locales'

export type PageProviderProps = {
  currentLocale: LocaleKeys
  children?: ReactNode
}

export type PageProps = {
  currentLocale: LocaleKeys
}
