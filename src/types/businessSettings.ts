import { Theme } from 'types/theme'

export type BusinessInfo = {
  core: {
    useDefaultLoader: boolean
  }
  businessData: {
    businessName: string
  }
  imagePaths: {
    businessLogo: string
  }
  meta: {
    manifestUrl: string | null
    appleTouchIcon: string | null
    description: string | null
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
