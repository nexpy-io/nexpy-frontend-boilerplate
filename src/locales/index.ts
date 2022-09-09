// To set a new language, import the language file and put it in the languages
// object. Set available languages and default language in `next.config.js` file.

import { validateServerLanguageMatch } from 'utils/serverValidations'

import { LocaleKeys } from 'types/locales'

import en from './source/en.json'
import pt from './source/pt.json'

export const languages = {
  en,
  pt,
}

export const clientAvailableLanguages = Object.keys(languages) as LocaleKeys[]

validateServerLanguageMatch(clientAvailableLanguages, 'global')
