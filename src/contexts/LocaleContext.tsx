import { createContext, PropsWithChildren } from 'react'

import { LocaleKeys } from 'types/locales'

type LocaleProviderProps = PropsWithChildren<{
  locale: LocaleKeys
}>

export const LocaleContext = createContext('pt' as LocaleKeys)

export const LocaleProvider = ({ locale, children }: LocaleProviderProps) => (
  <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
)
