import { Theme } from 'types/theme'

export const sanitizeTheme = (themeFromProvider: Theme): Theme => {
  return {
    colors: themeFromProvider.colors,
  }
}
