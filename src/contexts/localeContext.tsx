import { createContext, ReactNode } from 'react'

import { LocaleKeys } from 'types/locales'

type LocaleProviderProps = {
  locale: LocaleKeys
  children: ReactNode
}

export const LocaleContext = createContext<LocaleKeys>('pt-BR')

export const LocaleProvider = ({
  locale,
  children,
  ...props
}: LocaleProviderProps) => {
  return (
    <LocaleContext.Provider value={locale} {...props}>
      {children}
    </LocaleContext.Provider>
  )
}
