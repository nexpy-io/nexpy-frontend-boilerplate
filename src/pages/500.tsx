import * as Sentry from '@sentry/nextjs'

import Error from 'views/Error'

const ErrorComponent = () => <Error />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getInitialProps = async (contextData: any) => {
  await Sentry.captureUnderscoreErrorException(contextData)

  return {}
}

export default ErrorComponent
