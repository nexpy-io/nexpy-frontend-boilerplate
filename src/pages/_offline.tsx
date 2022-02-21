import { GetStaticProps, NextPage } from 'next'

import { Offline } from 'views'

import PageProvider from 'contexts/PageProvider'

import { getDefaultStaticProps } from 'utils/ssrPropGetters'

import { PageProps } from 'types/pageProps'

const Page: NextPage<PageProps> = ({ currentLocale }) => (
  <PageProvider currentLocale={currentLocale}>
    <Offline />
  </PageProvider>
)

export const getStaticProps: GetStaticProps = async context => {
  const props = getDefaultStaticProps(context)

  return {
    props,
  }
}

export default Page
