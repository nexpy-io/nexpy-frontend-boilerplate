import getHTTPClient from 'providers/core/getHttpClient'

import { NookiesNextContext } from 'types/nextContext'

const getNexpyServerSideClient = (context: NookiesNextContext) => getHTTPClient(context)

export default getNexpyServerSideClient
