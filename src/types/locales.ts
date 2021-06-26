import getLanguages from 'locales'

const languages = getLanguages()

export type LocaleKeys = keyof typeof languages
