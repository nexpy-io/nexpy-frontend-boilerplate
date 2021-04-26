/* eslint-disable no-console */
import axios from 'axios'

import { getPublicEnvironmentConfig } from 'utils/environment'

const {
  NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_URL,
} = getPublicEnvironmentConfig()

if (
  !NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_URL &&
  NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_URL === 'undefined'
) {
  console.error('No Analytics Engine URL specified.')
}

const instance = axios.create({
  baseURL: NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_URL,
})

export default instance
