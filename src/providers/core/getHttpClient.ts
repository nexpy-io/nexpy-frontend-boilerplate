import axios from 'axios'

import { NEXT_PUBLIC_API_URL } from 'utils/environment'
import { assignAuthorizationHeaderValue, getAuthTokenOrUndefined } from 'utils/sessions'

import { NookiesNextContext } from 'types/ssr'

const getHTTPClient = (nextContext?: NookiesNextContext) => {
  const axiosConfig = {
    baseURL: NEXT_PUBLIC_API_URL,
  }

  const httpClient = axios.create(axiosConfig)

  const currentToken = getAuthTokenOrUndefined(nextContext)

  if (currentToken) {
    assignAuthorizationHeaderValue(httpClient, currentToken)
  }

  return httpClient
}

export default getHTTPClient
