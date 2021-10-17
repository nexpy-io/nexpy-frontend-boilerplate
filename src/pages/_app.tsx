import { AppProps } from 'next/app'
import Head from 'next/head'

import { META_TAGS_IDENTIFIER_KEYS } from 'constants/meta'
import AppProvider from 'contexts/AppProvider'
import { initSentry } from 'utils/sentry'

import 'theme/preflight.css'

initSentry()

const App = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Head>
      <title key={META_TAGS_IDENTIFIER_KEYS.TITLE}>Nexpy</title>
      <meta name='viewport' content='width=device-width' />
    </Head>
    <Component {...pageProps} />
  </AppProvider>
)

export default App
