/* eslint-disable no-console */
import { Exception } from '@sentry/nextjs'

export type DefaultError = Error | Exception | unknown

export type PossibleErrorHandlerParams<SuccessValue> = {
  error: DefaultError
  successValue?: SuccessValue | null
  reportException?: boolean
  onSuccess?: (value: SuccessValue) => void
  onError?: (error: DefaultError) => void
}
