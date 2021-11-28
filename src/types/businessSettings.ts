import { Theme } from 'types/theme'

export type BusinessName = string

export type BusinessInfo = {
  core: {
    useDefaultLoader: boolean
    businessName: string
  }
  businessData: {
    businessName: BusinessName
  }
  imagePaths: {
    businessLogo: string
  }
  meta: {
    manifestUrl: string | null
    appleTouchIcon: string | null
    description: string | null
    applicationName: string | null
    appleMobileWebAppTitle: string | null
    themeColor: string | null
    ogDescription: string | null
    ogTitle: string | null
    ogImage: string | null
    ogSiteName: string | null
    twitterTitle: string | null
    twitterDescription: string | null
    twitterImage: string | null
  }
}

export type BusinessSettings = {
  theme: Theme
  businessInfo: BusinessInfo
}
