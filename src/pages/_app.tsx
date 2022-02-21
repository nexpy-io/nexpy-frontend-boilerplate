import { AppProps } from 'next/app'

import Meta from 'components/common/Meta'

import { initSentry } from 'utils/sentry'

import 'theme/preflight.css'

initSentry()

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Meta />
    <Component {...pageProps} />
  </>
)

export default App
