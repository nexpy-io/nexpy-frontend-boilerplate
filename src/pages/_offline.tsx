import { GetStaticProps } from 'next'

import PageWrapper from 'components/common/PageWrapper'

import { Offline } from 'views'

import { getDefaultStaticProps } from 'utils/ssrPropGetters'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale, businessSettings, ...props }: PageProps) => (
  <PageWrapper currentLocale={currentLocale} businessSettings={businessSettings}>
    <Offline {...props} />
  </PageWrapper>
)

export const getStaticProps: GetStaticProps = async context => {
  const props = getDefaultStaticProps(context)

  return {
    props,
  }
}

export default Page
