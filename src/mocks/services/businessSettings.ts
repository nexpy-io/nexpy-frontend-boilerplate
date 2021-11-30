import { AxiosResponse } from 'axios'

import { delayPromise } from 'utils/mocks'

import { businessSettings } from 'mocks/data/businessSettings.data'

import { BusinessSettings, BusinessName } from 'types/businessSettings'

const RESOLVE_ALL = true

export const businessSettingsMockRequest = async (businessName: BusinessName) => {
  await delayPromise()

  return new Promise<AxiosResponse<BusinessSettings>>((resolve, reject) => {
    if (businessName !== businessSettings.businessInfo.core.businessUniqueLabel) {
      reject(new Error('Invalid businessName.'))
    } else if (RESOLVE_ALL) {
      resolve({
        data: businessSettings,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
        request: '',
      })
    } else {
      reject(new Error('Invalid businessName.'))
    }
  })
}
