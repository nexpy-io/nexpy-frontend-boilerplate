import { ReactNode } from 'react'

import { ThemeProvider } from '@xstyled/styled-components'
import merge from 'lodash/merge'

import Compose from 'components/common/Compose'

import { BusinessInfoProvider } from 'contexts/BusinessInfoContext'
import { LocaleProvider } from 'contexts/LocaleContext'

import defaultBusinessInfo from 'settings/defaultBusinessInfo'

import { BusinessInfo } from 'types/businessSettings'
import { LocaleKeys } from 'types/locales'
import { PageProviderProps } from 'types/pageProps'
import { Theme } from 'types/theme'

import defaultTheme from 'theme/defaultTheme'

import userSettingsMock from 'mocks/businessSettings'

type DynamicPageProviderProps = {
  children: ReactNode
  theme: Theme
  locale: LocaleKeys
  businessInfo: BusinessInfo
}

const DynamicPageProvider = ({
  children,
  theme,
  locale,
  businessInfo,
}: DynamicPageProviderProps) => (
  <Compose
    components={[
      {
        render: BusinessInfoProvider,
        props: {
          businessInfo: merge({}, defaultBusinessInfo, businessInfo),
        },
      },
      {
        render: LocaleProvider,
        props: {
          locale,
        },
      },
      {
        render: ThemeProvider,
        props: {
          theme: merge({}, defaultTheme, theme),
        },
      },
    ]}
  >
    {children}
  </Compose>
)

const PageProviderWrapper = ({ children, currentLocale }: PageProviderProps) => {
  const businessSettings = userSettingsMock

  return (
    <DynamicPageProvider
      theme={businessSettings.theme}
      locale={currentLocale}
      businessInfo={businessSettings.businessInfo}
    >
      {children}
    </DynamicPageProvider>
  )
}

export default PageProviderWrapper
