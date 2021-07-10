import { GetServerSideProps } from 'next'

import { Dashboard } from 'views'

import PageProvider from 'contexts/PageProvider'
import { getDefaultServerSideProps } from 'utils/defaultServerSidePropGetters'
import { getAuthTokenOrUndefined } from 'utils/sessions'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale, ...props }: PageProps) => (
  <PageProvider currentLocale={currentLocale} {...props}>
    <Dashboard />
  </PageProvider>
)

export const getServerSideProps: GetServerSideProps = async context => {
  const token = getAuthTokenOrUndefined(context)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      ...getDefaultServerSideProps(context),
    },
  }
}

export default Page
