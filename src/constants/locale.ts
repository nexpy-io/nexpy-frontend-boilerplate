import { validateServerDefaultLanguage } from 'utils/serverValidations'

import { LocaleKeys } from 'types/locales'

export const DEFAULT_LOCALE_IDENTIFIER: LocaleKeys = 'pt'

validateServerDefaultLanguage(DEFAULT_LOCALE_IDENTIFIER)
