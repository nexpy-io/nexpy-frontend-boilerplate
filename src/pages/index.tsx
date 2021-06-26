import { GetStaticProps } from 'next'

import { Translate } from 'components'

import AppProvider from 'contexts/AppProvider'
import { getDefaultStaticProps } from 'utils/defaultServerSideProps'

import { PageProps } from 'types/pageProps'

import userSettingsMock from 'mocks/businessSettings'

const Login = ({ currentLocale }: PageProps) => {
  const businessSettings = userSettingsMock

  return (
    <AppProvider
      theme={businessSettings.theme}
      locale={currentLocale}
      businessInfo={businessSettings.businessInfo}
    >
      <p>
        <Translate identifier='welcome-home-page' />
      </p>
    </AppProvider>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      ...getDefaultStaticProps(context),
    },
  }
}

export default Login
