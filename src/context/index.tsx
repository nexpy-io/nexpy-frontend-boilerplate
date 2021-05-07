import { ReactNode } from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { merge } from 'lodash'

import { LocaleProvider } from 'context/localeContext'
import { BusinessInfoProvider } from 'context/businessInfoContext'

import defaultTheme from 'theme/defaultTheme'

import { Theme } from 'types/theme'
import { LocaleKeys } from 'types/locales'
import { BusinessInfo } from 'types/businessSettings'

type DynamicAppProvidersProps = {
  children: ReactNode
  theme: Theme
  locale: LocaleKeys
  businessInfo: BusinessInfo
}

const DynamicAppProviders = ({
  children,
  theme,
  locale,
  businessInfo,
  ...props
}: DynamicAppProvidersProps) => (
  <BusinessInfoProvider businessInfo={businessInfo}>
    <LocaleProvider locale={locale} {...props}>
      <ThemeProvider theme={merge({}, defaultTheme, theme)}>
        {children}
      </ThemeProvider>
    </LocaleProvider>
  </BusinessInfoProvider>
)

export default DynamicAppProviders
