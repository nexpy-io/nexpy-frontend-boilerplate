/* eslint-disable no-console */
import { NextWebVitalsMetric } from 'next/app'

import instance from 'providers/analytics'

import { captureException } from 'utils/sentry'
import { isProductionMode, getPublicEnvironmentConfig } from 'utils/environment'

const {
  NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_IS_ENABLED,
  NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_URL,
} = getPublicEnvironmentConfig()

export const sendBeacon = (metrics: NextWebVitalsMetric) => {
  const sendMetric = async () => {
    try {
      if (navigator.sendBeacon && NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_URL) {
        navigator.sendBeacon(
          NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_URL,
          JSON.stringify(metrics)
        )
      } else {
        await instance.post('', metrics)
      }
    } catch (error) {
      captureException(error)
      console.error('Analytics metrics report failed.')
    }
  }

  if (
    isProductionMode() &&
    NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_IS_ENABLED === 'true'
  ) {
    sendMetric()
  } else {
    console.info('Analytics metrics report disabled.')
  }
}
