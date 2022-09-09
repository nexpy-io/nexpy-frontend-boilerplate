/* eslint-disable no-console */

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN

const ENABLE_SENTRY = !!(process.env.NODE_ENV === 'production' && SENTRY_DSN)

if (process.env.NODE_ENV === 'production' && !SENTRY_DSN) {
  console.error('Sentry is not enabled.')
}

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  enabled: ENABLE_SENTRY,
})
