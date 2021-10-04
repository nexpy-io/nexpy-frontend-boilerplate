import { GetServerSideProps } from 'next'

import PageWrapper from 'components/common/PageWrapper'

import { Dashboard } from 'views'

import { withAuth } from 'utils/auth'
import { getDefaultServerSideProps } from 'utils/defaultServerSidePropGetters'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale, ...props }: PageProps) => (
  <PageWrapper currentLocale={currentLocale}>
    <Dashboard {...props} />
  </PageWrapper>
)

export const getServerSideProps: GetServerSideProps = async context => {
  return withAuth(context, {
    props: {
      ...getDefaultServerSideProps(context),
    },
  })
}

export default Page
