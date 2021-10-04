import { GetStaticProps } from 'next'

import PageWrapper from 'components/common/PageWrapper'

import { Home } from 'views'

import { getDefaultStaticProps } from 'utils/defaultServerSidePropGetters'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale, ...props }: PageProps) => (
  <PageWrapper currentLocale={currentLocale}>
    <Home {...props} />
  </PageWrapper>
)

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      ...getDefaultStaticProps(context),
    },
  }
}

export default Page
