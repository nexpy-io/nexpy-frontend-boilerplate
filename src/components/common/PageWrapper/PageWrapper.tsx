import HeadManager from 'components/common/PageWrapper/HeadManager'

import PageProvider from 'contexts/PageProvider'

import { PageProviderProps } from 'types/pageProps'

type PageWrapperProps = PageProviderProps

const PageWrapper = ({ currentLocale, children }: PageWrapperProps) => (
  <PageProvider currentLocale={currentLocale}>
    <HeadManager />
    {children}
  </PageProvider>
)

export default PageWrapper
