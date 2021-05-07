import { Theme } from 'types/theme'

export type UserSettings = {
  theme: Theme
  user: {
    businessInfo: {
      businessName: string
    }
    imagePaths: {
      businessLogo: string
    }
  }
}
