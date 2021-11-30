import { memo, PropsWithChildren } from 'react'

import { ThemeProvider } from '@xstyled/styled-components'

import { BusinessInfoProvider } from 'contexts/BusinessInfoContext'
import { HeadProvider } from 'contexts/HeadContext'
import { LocaleProvider } from 'contexts/LocaleContext'

import { BusinessInfo } from 'types/businessSettings'
import { LocaleKeys } from 'types/locales'
import { Theme } from 'types/theme'

type PageProviderComposerProps = PropsWithChildren<{
  theme: Theme
  locale: LocaleKeys
  businessInfo: BusinessInfo
}>

const PageProviderComposer = ({
  children,
  theme,
  locale,
  businessInfo,
}: PageProviderComposerProps) => (
  <BusinessInfoProvider businessInfo={businessInfo}>
    <LocaleProvider locale={locale}>
      <ThemeProvider theme={theme}>
        <HeadProvider>{children}</HeadProvider>
      </ThemeProvider>
    </LocaleProvider>
  </BusinessInfoProvider>
)

export default memo(PageProviderComposer)
