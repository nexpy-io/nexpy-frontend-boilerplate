/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppProps as NextAppProps } from 'next/app'

import { initSentry } from 'utils/sentry'

initSentry()

interface AppProps extends NextAppProps {
  err: any
}

// Workaround for https://github.com/vercel/next.js/issues/8592
const App = ({ Component, pageProps, err }: AppProps) => (
  <Component {...pageProps} err={err} />
)

export default App
