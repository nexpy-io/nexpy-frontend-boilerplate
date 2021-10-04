import { AppProps as NextAppProps } from 'next/app'

import AppProvider from 'contexts/AppProvider'
import { initSentry } from 'utils/sentry'

import 'theme/preflight.css'

initSentry()

type AppProps = {
  err: unknown
} & NextAppProps

// Workaround for https://github.com/vercel/next.js/issues/8592
const App = ({ Component, pageProps, err }: AppProps) => (
  <AppProvider>
    <Component {...pageProps} err={err} />
  </AppProvider>
)

export default App
