import { useContext } from 'react'

import { LocaleContext } from 'contexts/LocaleContext'

const useCurrentLocale = () => {
  const contextValue = useContext(LocaleContext)

  if (contextValue === undefined) {
    throw new Error(
      'useCurrentLocale must be used within a LocaleProvider from contexts.'
    )
  }

  return contextValue
}

export default useCurrentLocale
