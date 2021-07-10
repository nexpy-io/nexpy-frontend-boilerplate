import { defaultTheme as xStyledDefaultTheme } from '@xstyled/styled-components'
import merge from 'lodash/merge'

import { Theme } from 'types/theme'

const defaultTheme: Theme = {
  colors: {
    primary: '#f2f',
    secondary: '#ca2',
  },
}

export default merge({}, xStyledDefaultTheme, defaultTheme)
