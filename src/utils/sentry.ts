/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import * as SentryEngine from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { getPublicEnvironmentConfig, isProductionMode } from 'utils/environment'

const { NEXT_PUBLIC_SENTRY_DSN } = getPublicEnvironmentConfig()

export const initSentry = () => {
  if (!isProductionMode()) {
    console.info('Sentry skipped.')

    return
  }

  if (!NEXT_PUBLIC_SENTRY_DSN) {
    console.error('Sentry not loaded. A valid DNS config could not be found.')

    return
  }

  try {
    SentryEngine.init({
      enabled: isProductionMode(),
      integrations: [new Integrations.BrowserTracing()],
      dsn: NEXT_PUBLIC_SENTRY_DSN,
    })
  } catch (error) {
    console.error(
      'Sentry not loaded. An error was encountered when starting Sentry.'
    )
  }
}

export const captureException = async (error: any) => {
  if (isProductionMode()) {
    try {
      SentryEngine.captureException(error)

      const success = await SentryEngine.flush(5000)

      if (!success) {
        throw new Error()
      }

      console.error(
        `flush pass: ${success}`,
        'This exception was caught automatically and will be debugged.',
        'Your correction will be evaluated and contact support is not necessary.',
        error
      )
    } catch {
      console.error(
        'It was not possible to send exception data for Nexpy servers. Please report this bug!'
      )
    }
  }

  console.error('isProductionMode: false', error)
}

export default SentryEngine
