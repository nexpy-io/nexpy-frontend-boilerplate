import { createContext, useContext, ReactNode } from 'react'

import { LocaleKeys } from 'types/locales'

const LocaleContext = createContext<LocaleKeys>('pt-BR')

const useLocale = () => {
  const context = useContext(LocaleContext)

  if (context === undefined) {
    throw new Error('useLocale must be used within an LocaleProvider.')
  }

  return context
}

type LocaleProviderProps = {
  locale: LocaleKeys
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LocaleProvider = ({
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

export { LocaleProvider, useLocale }
