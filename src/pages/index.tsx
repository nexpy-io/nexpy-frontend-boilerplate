import { GetStaticProps } from 'next'

import { PageWrapper } from 'components'

import { Home } from 'views'

import { getDefaultStaticProps } from 'utils/defaultServerSideProps'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale, ...props }: PageProps) => (
  <PageWrapper currentLocale={currentLocale} {...props}>
    <Home />
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
