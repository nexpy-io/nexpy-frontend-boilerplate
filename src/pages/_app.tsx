/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppProps as NextAppProps, NextWebVitalsMetric } from 'next/app'
import { Preflight } from '@xstyled/styled-components'
import 'trackers/wdyr'

import 'sanitize.css'

import { sendBeacon } from 'services/analytics'

import { initSentry } from 'utils/sentry'

initSentry()

let loaded: boolean

export const reportWebVitals = (metrics: NextWebVitalsMetric) => {
  if (!loaded) {
    sendBeacon(metrics)
    loaded = true
  }
}

interface AppProps extends NextAppProps {
  err: any
}

// Workaround for https://github.com/vercel/next.js/issues/8592
const App = ({ Component, pageProps, err }: AppProps) => (
  <>
    <Preflight />
    <Component {...pageProps} err={err} />
  </>
)

export default App
