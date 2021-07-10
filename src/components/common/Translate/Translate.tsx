import { memo } from 'react'

import useCurrentLocale from 'hooks/useCurrentLocale'

import { LocaleKeys } from 'types/locales'

import getLanguages from 'locales'

const languages = getLanguages()

type Identifier = keyof typeof languages[LocaleKeys]

type TranslateProps = {
  identifier: Identifier
}

const Translate = ({ identifier }: TranslateProps) => {
  const locale = useCurrentLocale()
  const currentLanguage = languages[locale]

  return <>{currentLanguage[identifier] ?? ''}</>
}

export default memo(Translate)
