import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import Meta from 'components/common/Meta'

import AppWrapper from 'contexts/AppWrapper'

import { Slide } from 'utils/toasts'

import GlobalStyle from 'theme/GlobalStyle'

import 'react-toastify/dist/ReactToastify.css'
import '@nexpy/design-system/dist/preflight.css'

const App = ({ Component, pageProps }: AppProps) => (
  <AppWrapper>
    <ToastContainer position='bottom-left' transition={Slide} />
    <GlobalStyle />
    <Meta />
    <Component {...pageProps} />
  </AppWrapper>
)

export default App
