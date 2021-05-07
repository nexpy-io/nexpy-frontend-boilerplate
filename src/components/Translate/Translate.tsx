import { getLanguages } from 'locales'

import { useLocale } from 'context/localeContext'

const languages = getLanguages()

type TranslateProps = {
  identifier: string
}

const Translate = ({ identifier }: TranslateProps) => {
  const locale = useLocale()
  const currentLanguage = languages[locale]
  const typedIdentifierKey = identifier as keyof typeof currentLanguage

  return <>{currentLanguage[typedIdentifierKey] ?? ''}</>
}

export default Translate
