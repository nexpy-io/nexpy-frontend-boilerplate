import defaultDynamicTheme from 'theme/defaultDynamicTheme'
import animations from 'theme/themeAssets/animations'
import fonts from 'theme/themeAssets/fonts'
import fontSizes from 'theme/themeAssets/fontSizes'
import fontWeights from 'theme/themeAssets/fontWeights'
import letterSpacings from 'theme/themeAssets/letterSpacings'
import lineHeights from 'theme/themeAssets/lineHeights'
import radii from 'theme/themeAssets/radii'
import screens from 'theme/themeAssets/screens'
import shadows from 'theme/themeAssets/shadows'
import space from 'theme/themeAssets/space'
import transitionProperties from 'theme/themeAssets/transitionProperties'

const theme = {
  animations,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  screens,
  shadows,
  space,
  transitionProperties,

  colors: defaultDynamicTheme.colors,
}

export default theme
