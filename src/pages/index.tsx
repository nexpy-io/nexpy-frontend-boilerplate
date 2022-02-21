import { GetStaticProps } from 'next'

import { Home } from 'views'

import PageProvider from 'contexts/PageProvider'

import { getDefaultStaticProps } from 'utils/ssrPropGetters'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale }: PageProps) => (
  <PageProvider currentLocale={currentLocale}>
    <Home />
  </PageProvider>
)

export const getStaticProps: GetStaticProps = async context => {
  const props = getDefaultStaticProps(context)

  return {
    props,
  }
}

export default Page
