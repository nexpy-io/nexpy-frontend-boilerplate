import { PropsWithChildren } from 'react'

import { ThemeProvider } from '@xstyled/styled-components'

import { LocaleProvider } from 'contexts/LocaleContext'

import defaultTheme from 'theme/globalTheme'

import { PageProps } from 'types/pageProps'

type PageProviderProps = PropsWithChildren<PageProps>

const PageProvider = ({ children, currentLocale }: PageProviderProps) => {
  return (
    <LocaleProvider locale={currentLocale}>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </LocaleProvider>
  )
}

export default PageProvider
