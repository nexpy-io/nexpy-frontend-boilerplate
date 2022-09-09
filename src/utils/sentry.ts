/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */

import { captureException as sentryCaptureException, flush } from '@sentry/nextjs'
import { isProductionMode } from 'environment'

import { BUSINESS_NAME } from 'constants/company'

import { DefaultError } from 'types/exceptions'

import { isNavigatorOnline } from './connection'

export const captureException = async (error: DefaultError) => {
  if (isProductionMode) {
    try {
      if (!isNavigatorOnline) {
        console.error(
          '[MONITORING] Error capture skipped. No internet connection.',
          error
        )

        return
      }

      sentryCaptureException(error)

      const success = await flush(5000)

      if (!success) {
        throw new Error(
          `Flush pass: false. It may not have been possible to send exception data to ${BUSINESS_NAME} servers. Please report this bug! ${String(
            error
          )}`
        )
      }

      console.error(
        `Flush pass: ${success}`,
        'This exception was caught automatically and will be debugged.',
        'Your correction will be evaluated and contact support is not necessary.\n',
        error
      )
    } catch {
      console.error(
        `[MONITORING] It was not possible to send exception data for ${BUSINESS_NAME} servers. Please report this bug!
`,
        error
      )
    }
  } else {
    console.error('[DEV_ERROR] ', error)
  }
}
