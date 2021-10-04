import { memo, ReactNode } from 'react'

import { ThemeProvider } from '@xstyled/styled-components'

import Compose from 'components/common/Compose'

import { BusinessInfoProvider } from 'contexts/BusinessInfoContext'
import { HeadProvider } from 'contexts/HeadContext'
import { LocaleProvider } from 'contexts/LocaleContext'

import { BusinessInfo } from 'types/businessSettings'
import { LocaleKeys } from 'types/locales'
import { Theme } from 'types/theme'

type DynamicPageProviderProps = {
  children: ReactNode
  theme: Theme | null
  locale: LocaleKeys
  businessInfo: BusinessInfo | null
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
          businessInfo,
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
          theme,
        },
      },
      {
        render: HeadProvider,
      },
    ]}
  >
    {children}
  </Compose>
)

export default memo(DynamicPageProvider)
