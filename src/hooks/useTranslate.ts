import { useMemo, useCallback } from 'react'

import { LocaleContext } from 'contexts/LocaleContext'

import { languages } from 'locales'

import { Identifier } from 'types/locales'

export const useTranslate = () => {
  const localeContextValue = LocaleContext.useContext()

  if (localeContextValue === undefined) {
    throw new Error('useTranslate must be used within a LocaleProvider from contexts.')
  }

  const currentLocaleId = localeContextValue.currentLocale

  const currentLocaleTextData = useMemo(
    () => languages[currentLocaleId],
    [currentLocaleId]
  )

  const t = useCallback(
    (identifier: Identifier) => {
      return currentLocaleTextData[identifier] ?? ''
    },
    [currentLocaleTextData]
  )

  return {
    t,
    localeContextValue,
    currentLocale: currentLocaleId,
    defaultLocale: localeContextValue.defaultLocale,
  }
}
