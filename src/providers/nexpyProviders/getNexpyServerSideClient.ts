import getHTTPClient from 'providers/core/getHttpClient'

import { NookiesNextContext } from 'types/ssr'

const getNexpyServerSideClient = (context: NookiesNextContext) => getHTTPClient(context)

export default getNexpyServerSideClient
