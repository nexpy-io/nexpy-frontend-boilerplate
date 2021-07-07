import { useContext } from 'react'

import { LocaleContext } from 'contexts/LocaleContext'

const useCurrentLocale = () => {
  const context = useContext(LocaleContext)

  if (context === undefined) {
    throw new Error(
      'useCurrentLocale must be used within a LocaleProvider from contexts.'
    )
  }

  return context
}

export default useCurrentLocale
