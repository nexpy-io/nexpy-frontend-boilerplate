import { ReactNode } from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import _ from 'lodash'

import defaultTheme from 'theme/defaultTheme'

import { Theme } from 'types/theme'

type DynamicAppProvidersProps = {
  children: ReactNode
  theme: Theme
}

export const DynamicAppProviders = ({
  children,
  theme,
}: DynamicAppProvidersProps) => (
  <ThemeProvider theme={_.merge({}, defaultTheme, theme)}>
    {children}
  </ThemeProvider>
)
