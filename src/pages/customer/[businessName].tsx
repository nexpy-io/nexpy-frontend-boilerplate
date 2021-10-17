import { GetStaticProps, GetStaticPaths } from 'next'

import PageWrapper from 'components/common/PageWrapper'

import { Customer } from 'views'

import { resolveServerSideBusinessSettings } from 'utils/businessSettings'
import { getDefaultStaticProps } from 'utils/ssrPropGetters'

import { PageProps } from 'types/pageProps'

const Page = ({ currentLocale, businessSettings, ...props }: PageProps) => (
  <PageWrapper currentLocale={currentLocale} businessSettings={businessSettings}>
    <Customer {...props} />
  </PageWrapper>
)

export const getStaticProps: GetStaticProps = async context => {
  const defaultProps = await getDefaultStaticProps(context)
  const businessSettings = await resolveServerSideBusinessSettings(
    context.params?.businessName
  )

  if (!businessSettings) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...defaultProps,
      businessSettings,
    },
    revalidate: 60 * 5, // five minutes
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
})

export default Page
