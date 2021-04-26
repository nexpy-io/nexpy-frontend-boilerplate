import { getLanguages } from 'locales'

const languages = getLanguages()

export type LocaleKeys = keyof typeof languages

export type TranslateProps = {
  identifier: string
  locale: LocaleKeys
  defaultLocale?: LocaleKeys
}

const Translate = ({ identifier, locale }: TranslateProps) => {
  const currentLanguage = languages[locale]

  const identifierKey = identifier as keyof typeof currentLanguage

  return <>{currentLanguage[identifierKey] ?? ''}</>
}

export default Translate
