/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppProps as NextAppProps } from 'next/app'

import { Preflight } from '@xstyled/styled-components'
import 'trackers/wdyr'

import { Head } from 'components'

import 'sanitize.css'

import { initSentry } from 'utils/sentry'

initSentry()
interface AppProps extends NextAppProps {
  err: any
}

// Workaround for https://github.com/vercel/next.js/issues/8592
const App = ({ Component, pageProps, err }: AppProps) => (
  <>
    <Head />
    <Preflight />
    <Component {...pageProps} err={err} />
  </>
)

export default App
