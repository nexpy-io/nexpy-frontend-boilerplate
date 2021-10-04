import { useContext } from 'react'

import { LocaleContext } from 'contexts/LocaleContext'

import getLanguages from 'locales'

import { Identifier } from 'types/locales'

const languages = getLanguages()

const useTranslate = () => {
  const currentLocale = useContext(LocaleContext)

  if (currentLocale === undefined) {
    throw new Error('useTranslate must be used within a LocaleProvider from contexts.')
  }

  const t = (identifier: Identifier) => {
    const currentLanguage = languages[currentLocale]

    return currentLanguage[identifier] ?? ''
  }

  return { t, currentLocale }
}

export default useTranslate
