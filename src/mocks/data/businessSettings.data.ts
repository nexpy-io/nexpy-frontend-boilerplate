import { BusinessSettings } from 'types/businessSettings'

export const businessSettings: BusinessSettings = {
  theme: {
    colors: {
      black: '#28262C',
      white: '#f9f5ff',

      primary: '#7B1477',
      secondary: '#9A0C9D',
      tertiary: '#d6bf3a',

      buttonActive: '#d6bf3a',
    },
  },
  businessInfo: {
    core: {
      useDefaultLoader: false,
      businessUniqueLabel: 'jaqueline-furtado',
    },
    businessData: {
      businessName: 'Jaqueline Furtado',
    },
    imagePaths: {
      businessLogo: '/img/temp.png',
    },
    meta: {
      manifestUrl: '/manifest-mock.json',
      appleTouchIcon: '/icons/icon-192x192.png',
      applicationName: 'Jaqueline Furtado',
      appleMobileWebAppTitle: 'Jaqueline Furtado Salão de Beleza',
      description: 'Jaqueline Furtado Salão de Beleza',
      themeColor: '#9855FF',
      ogDescription: 'Jaqueline Furtado Salão de Beleza',
      ogTitle: 'Jaqueline Furtado',
      ogImage: '/icons/icon-512x512.png',
      ogSiteName: 'Jaqueline Furtado',
      twitterTitle: 'Jaqueline Furtado',
      twitterDescription: 'Jaqueline Furtado Salão de Beleza',
      twitterImage: '/icons/icon-512x512.png',
    },
  },
}
