import { useContext } from 'react'

import { LocaleContext } from 'contexts/localeContext'

const useCurrentLocale = () => {
  const context = useContext(LocaleContext)

  if (context === undefined) {
    throw new Error(
      'useCurrentLocale must be used within an LocaleProvider from contexts.'
    )
  }

  return context
}

export default useCurrentLocale
