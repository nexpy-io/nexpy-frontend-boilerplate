import { GetStaticProps } from 'next'
import styled, { th } from '@xstyled/styled-components'

import Translate from 'components/Translate'

import { DynamicAppProviders } from 'context'
import { getDefaultStaticProps } from 'utils/defaultStaticProps'

import { PageProps } from 'types/pageProps'

const Button = styled.buttonBox`
  background: ${th.color('secondary')};
`

const Login = ({ currentLocale, userSettings }: PageProps) => (
  <DynamicAppProviders theme={userSettings.theme}>
    <Button>oi</Button>
    <Translate identifier='welcome-home-page' locale={currentLocale} />
  </DynamicAppProviders>
)

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      ...getDefaultStaticProps(context),
    },
  }
}

export default Login
