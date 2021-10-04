import NextHead from 'next/head'

import { useBusiness, useHead } from 'hooks'

const HeadManager = () => {
  const businessSettings = useBusiness()

  const {
    head: { faviconUrl, headTitle, headTitleDescription },
  } = useHead()

  return (
    <NextHead>
      <title>
        {headTitle || businessSettings.businessData.businessName}
        {headTitleDescription && ` | ${headTitleDescription}`}
      </title>

      <link rel='shortcut icon' href={faviconUrl || '/favicon.ico'} />
    </NextHead>
  )
}

export default HeadManager
