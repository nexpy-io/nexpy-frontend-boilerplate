import { nextConfig } from 'constants/serverSettings'

type ClientLanguages = string[]
type ServerLanguages = string[] | undefined

const DISABLE_SERVER_CHECKS = process.env.DISABLE_SERVER_CHECKS === 'true'

export const validateServerDefaultLanguage = (DEFAULT_LOCALE_IDENTIFIER: string) => {
  if (DISABLE_SERVER_CHECKS) {
    return
  }

  const serverDefaultLocale = nextConfig?.publicRuntimeConfig?.defaultLocale

  if (serverDefaultLocale !== DEFAULT_LOCALE_IDENTIFIER) {
    throw new Error(
      `
      The default locale of your Next.js server is not the same as the default locale of the application.
      Please update your Next.js config to have the same locale as the app.
      Server: ${serverDefaultLocale}
      Client: ${DEFAULT_LOCALE_IDENTIFIER}
    `
    )
  }
}

export const validateServerLanguageMatch = (
  clientLanguages: ClientLanguages,
  callSignature: string
) => {
  if (DISABLE_SERVER_CHECKS) {
    return
  }

  const clientAvailableLanguages = clientLanguages
  const serverAvailableLanguages = nextConfig?.publicRuntimeConfig
    ?.locales as ServerLanguages

  const clientProvidesAllServerLanguages = serverAvailableLanguages?.every(l =>
    clientAvailableLanguages.includes(l)
  )

  const serverProvidesAllClientLanguages = clientAvailableLanguages?.every(l =>
    serverAvailableLanguages?.includes(l)
  )

  if (!(clientProvidesAllServerLanguages && serverProvidesAllClientLanguages)) {
    throw new Error(`
      The server and the client do not compress with the same nationalization settings.

      callSignature: ${callSignature}


      clientProvidesAllServerLanguages: ${clientProvidesAllServerLanguages}
      serverProvidesAllClientLanguages: ${serverProvidesAllClientLanguages}

      clientAvailableLanguages: ${clientAvailableLanguages}
      serverAvailableLanguages: ${serverAvailableLanguages}
    `)
  }
}
