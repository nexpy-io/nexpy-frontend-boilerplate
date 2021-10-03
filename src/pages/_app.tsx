import { AppProps as NextAppProps } from 'next/app'
import NextHead from 'next/head'

import AppProvider from 'contexts/AppProvider'
import { initSentry } from 'utils/sentry'

import 'theme/preflight.css'

initSentry()
interface AppProps extends NextAppProps {
  err: unknown
}

// Workaround for https://github.com/vercel/next.js/issues/8592
const App = ({ Component, pageProps, err }: AppProps) => (
  <AppProvider>
    <NextHead>
      <title>Nexpy</title>

      <link rel='shortcut icon' href='/favicon.ico' />
    </NextHead>
    <Component {...pageProps} err={err} />
  </AppProvider>
)

export default App
