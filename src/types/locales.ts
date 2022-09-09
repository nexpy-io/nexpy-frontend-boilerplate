import { languages } from 'locales'

export type LocaleKeys = keyof typeof languages

export type Identifier = keyof typeof languages[LocaleKeys]
