import * as SentryEngine from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import { getPublicEnvironmentConfig, isProductionMode } from 'utils/environment'

const { NEXT_PUBLIC_SENTRY_DSN } = getPublicEnvironmentConfig()

export const initSentry = () => {
  if (!isProductionMode()) {
    // eslint-disable-next-line no-console
    console.debug('[MONITORING] Sentry skipped.')

    return
  }

  if (!NEXT_PUBLIC_SENTRY_DSN) {
    // eslint-disable-next-line no-console
    console.error(
      '[MONITORING] Sentry not loaded. A valid DSN config could not be found.'
    )

    return
  }

  try {
    SentryEngine.init({
      enabled: isProductionMode(),
      integrations: [new Integrations.BrowserTracing()],
      dsn: NEXT_PUBLIC_SENTRY_DSN,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      '[MONITORING] Sentry not loaded. An error was encountered when starting Sentry.'
    )
  }
}

export const captureException = async (error: Error) => {
  if (isProductionMode()) {
    try {
      SentryEngine.captureException(error)

      const success = await SentryEngine.flush(5000)

      if (!success) {
        throw new Error()
      }

      // eslint-disable-next-line no-console
      console.error(
        `Flush pass: ${success}`,
        'This exception was caught automatically and will be debugged.',
        'Your correction will be evaluated and contact support is not necessary.',
        error
      )
    } catch {
      // eslint-disable-next-line no-console
      console.error(
        '[MONITORING] It was not possible to send exception data for Nexpy servers. Please report this bug!',
        error
      )
    }
  } else {
    // eslint-disable-next-line no-console
    console.error('[TRACKED_ERROR] ', error)
  }
}

export default SentryEngine
