import { createContext, ReactNode } from 'react'

import { LocaleKeys } from 'types/locales'

type LocaleProviderProps = {
  locale: LocaleKeys
  children: ReactNode
}

export const LocaleContext = createContext('pt' as LocaleKeys)

export const LocaleProvider = ({ locale, children }: LocaleProviderProps) => (
  <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
)
