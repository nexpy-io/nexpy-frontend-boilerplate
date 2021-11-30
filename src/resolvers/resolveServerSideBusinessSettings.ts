import { businessSettingsService } from 'services/serverSide/businessSettings'

import { NEXT_PUBLIC_USE_BUSINESS_SETTINGS_PROVIDER } from 'utils/environment'
// import { captureException } from 'utils/sentry'

export const isUsingBusinessSettingsProvider =
  NEXT_PUBLIC_USE_BUSINESS_SETTINGS_PROVIDER === 'true'

export const resolveServerSideBusinessSettings = async (
  businessName: string | string[] | undefined
) => {
  let businessSettings = null

  if (businessName && typeof businessName === 'string') {
    try {
      const businessSettingsAxiosResponse = await businessSettingsService(businessName)

      businessSettings = businessSettingsAxiosResponse.data
    } catch (error) {
      // TODO: If 404 result, ignore captureException. (Depends on the implementation of this feature by the server api)
      // captureException(error)
    }
  }

  return businessSettings
}
