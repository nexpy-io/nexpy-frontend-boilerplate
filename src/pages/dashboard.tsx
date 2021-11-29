import { GetServerSideProps } from 'next'

import PageWrapper from 'components/common/PageWrapper'

import { Dashboard } from 'views'

import { withAuth } from 'utils/auth'
import { getDefaultServerSideProps } from 'utils/ssrPropGetters'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale, businessSettings, ...props }: PageProps) => (
  <PageWrapper currentLocale={currentLocale} businessSettings={businessSettings}>
    <Dashboard {...props} />
  </PageWrapper>
)

export const getServerSideProps: GetServerSideProps = async context => {
  const props = getDefaultServerSideProps(context)

  return withAuth(context, {
    props,
  })
}

export default Page
