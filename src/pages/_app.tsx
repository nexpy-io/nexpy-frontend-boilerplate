import { AppProps as NextAppProps } from 'next/app'

import { Preflight } from '@xstyled/styled-components'

import { Head } from 'components/common'

import AppProvider from 'contexts/AppProvider'
import { initSentry } from 'utils/sentry'

import 'trackers/wdyr'

import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

initSentry()
interface AppProps extends NextAppProps {
  err: unknown
}

// Workaround for https://github.com/vercel/next.js/issues/8592
const App = ({ Component, pageProps, err }: AppProps) => (
  <AppProvider>
    <Head />
    <Preflight />
    <Component {...pageProps} err={err} />
  </AppProvider>
)

export default App
