import { BusinessInfo } from 'types/businessSettings'

const defaultBusinessInfo: BusinessInfo = {
  core: {
    useDefaultLoader: true,
    businessName: 'nexpy',
  },
  businessData: {
    businessName: 'Nexpy',
  },
  imagePaths: {
    businessLogo: '/images/logos/nexpy-logo-square.png',
  },
  meta: {
    manifestUrl: '/manifest.json',
    appleTouchIcon: '/icons/icon-192x192.png',
    applicationName: 'Nexpy',
    appleMobileWebAppTitle: 'Aplicação Nexpy para gerenciamento privado do seu negócio.',
    description: 'Aplicação Nexpy para gerenciamento privado do seu negócio.',
    themeColor: '#9855FF',
    ogDescription: 'Aplicação Nexpy para gerenciamento privado do seu negócio.',
    ogTitle: 'Nexpy',
    ogImage: '/icons/icon-512x512.png',
    ogSiteName: 'Nexpy',
    twitterTitle: 'Nexpy',
    twitterDescription: 'Aplicação Nexpy para gerenciamento privado do seu negócio.',
    twitterImage: '/icons/icon-512x512.png',
  },
}

export default defaultBusinessInfo
