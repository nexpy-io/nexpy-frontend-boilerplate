import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { createContext } from '@nexpy/react-easy-context-api'

import { DEFAULT_LOCALE_IDENTIFIER } from 'constants/locale'

import { LocaleKeys } from 'types/locales'

type LocaleContextValue = {
  currentLocale: LocaleKeys
  defaultLocale: LocaleKeys
}

type LocaleProviderProps = {
  children: ReactNode
}

export const LocaleContext = createContext<LocaleContextValue>({
  currentLocale: DEFAULT_LOCALE_IDENTIFIER,
  defaultLocale: DEFAULT_LOCALE_IDENTIFIER,
})

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const router = useRouter()

  const currentLocale = router.locale as LocaleKeys
  const defaultLocale = router.defaultLocale as LocaleKeys

  return (
    <LocaleContext.Provider value={{ currentLocale, defaultLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}
