import { ReactNode } from 'react'

import { ThemeProvider } from '@xstyled/styled-components'
import merge from 'lodash/merge'

import { BusinessInfoProvider } from 'contexts/BusinessInfoContext'
import { LocaleProvider } from 'contexts/LocaleContext'

import defaultBusinessInfo from 'settings/defaultBusinessInfo'

import { BusinessInfo } from 'types/businessSettings'
import { LocaleKeys } from 'types/locales'
import { Theme } from 'types/theme'

import defaultTheme from 'theme/defaultTheme'

type AppProviderProps = {
  children: ReactNode
  theme: Theme
  locale: LocaleKeys
  businessInfo: BusinessInfo
}

const AppProvider = ({
  children,
  theme,
  locale,
  businessInfo,
  ...props
}: AppProviderProps) => (
  <BusinessInfoProvider
    businessInfo={merge({}, defaultBusinessInfo, businessInfo)}
  >
    <LocaleProvider locale={locale} {...props}>
      <ThemeProvider theme={merge({}, defaultTheme, theme)}>
        {children}
      </ThemeProvider>
    </LocaleProvider>
  </BusinessInfoProvider>
)

export default AppProvider
