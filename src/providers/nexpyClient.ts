import axios from 'axios'

import { getPublicEnvironmentConfig } from 'utils/environment'
import { getSavedAuthTokenOrUndefined } from 'utils/sessions'

const publicEnvironmentValues = getPublicEnvironmentConfig()
const PUBLIC_API_BASE_URL = publicEnvironmentValues.NEXT_PUBLIC_API_URL

const axiosConfig = {
  baseURL: PUBLIC_API_BASE_URL,
}

const httpClient = axios.create(axiosConfig)

const currentToken = getSavedAuthTokenOrUndefined()

if (currentToken) {
  httpClient.defaults.headers.Authorization = `Bearer ${currentToken}`
}

export default httpClient
