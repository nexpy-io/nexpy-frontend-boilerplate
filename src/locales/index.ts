// To set a new language, import the language file and put it in the languages
// object. Set available languages and default language in `next.config.js` file.

import enUS from './en-US.json'
import ptBR from './pt-BR.json'

const languages = {
  'en-US': enUS,
  'pt-BR': ptBR,
}

export const getLanguages = () => languages
