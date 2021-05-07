import { GetStaticProps } from 'next'

import Translate from 'components/Translate'

import DynamicAppProviders from 'context'
import { getDefaultStaticProps } from 'utils/defaultStaticProps'

import { PageProps } from 'types/pageProps'

const Login = ({ currentLocale, businessSettings }: PageProps) => (
  <DynamicAppProviders
    theme={businessSettings.theme}
    locale={currentLocale}
    businessInfo={businessSettings.businessInfo}
  >
    <p>
      <Translate identifier='welcome-home-page' />
    </p>
  </DynamicAppProviders>
)

export const getStaticProps: GetStaticProps = async context => ({
  props: {
    ...getDefaultStaticProps(context),
  },
})

export default Login
