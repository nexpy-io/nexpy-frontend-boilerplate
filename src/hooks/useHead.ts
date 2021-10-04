import { useContext } from 'react'

import { HeadContext } from 'contexts/HeadContext'

const useHead = () => {
  const contextValue = useContext(HeadContext)

  if (contextValue === undefined) {
    throw new Error('useHead must be used within a HeadProvider from contexts.')
  }

  return contextValue
}

export default useHead
