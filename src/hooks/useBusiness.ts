import { useContext } from 'react'

import { BusinessInfoContext } from 'contexts/BusinessInfoContext'

const useBusiness = () => {
  const context = useContext(BusinessInfoContext)

  if (context === undefined) {
    throw new Error(
      'useBusiness must be used within an BusinessInfoProvider from contexts.'
    )
  }

  return context
}

export default useBusiness
