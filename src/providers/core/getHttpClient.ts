import axios from 'axios'

import { getPublicEnvironmentConfig } from 'utils/environment'
import { getAuthTokenOrUndefined } from 'utils/sessions'

import { NookiesNextContext } from 'types/nextContext'

const getHTTPClient = (nextContext?: NookiesNextContext) => {
  const publicEnvironmentValues = getPublicEnvironmentConfig()
  const PUBLIC_API_BASE_URL = publicEnvironmentValues.NEXT_PUBLIC_API_URL

  const axiosConfig = {
    baseURL: PUBLIC_API_BASE_URL,
  }

  const httpClient = axios.create(axiosConfig)

  const currentToken = getAuthTokenOrUndefined(nextContext)

  if (currentToken) {
    httpClient.defaults.headers.Authorization = `Bearer ${currentToken}`
  }

  return httpClient
}

export default getHTTPClient
