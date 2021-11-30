import { useEffect, useMemo } from 'react'

import { captureException } from 'utils/sentry'

import { PossibleErrorHandlerParams } from 'types/exceptions'

const usePossibleErrorHandler = <SuccessValue = unknown>({
  error,
  successValue = null,
  reportException = true,
  onSuccess,
  onError,
}: PossibleErrorHandlerParams<SuccessValue>) => {
  const memoValues = useMemo(
    () => ({
      error,
      successValue,
      reportException,
      onSuccess,
      onError,
    }),
    [error, onError, onSuccess, reportException, successValue]
  )

  useEffect(() => {
    if (memoValues.error) {
      if (memoValues.reportException) {
        captureException(memoValues.error)
      }

      if (memoValues.onError) {
        memoValues.onError(memoValues.error)
      }

      return
    }

    if (
      memoValues.onSuccess &&
      memoValues.successValue !== undefined &&
      memoValues.successValue !== null
    ) {
      memoValues.onSuccess(memoValues.successValue)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoValues.error, memoValues.reportException, memoValues.successValue])
}

export default usePossibleErrorHandler
