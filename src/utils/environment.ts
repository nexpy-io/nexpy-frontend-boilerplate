import {
  productionEnvironmentNames,
  validEnvironmentNames,
  defaultProductionEnvironmentName,
} from 'constants/environment'

export const getPublicEnvironmentConfig = () => ({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
})

export const getNodeEnv = () => ({
  NODE_ENV: process.env.NODE_ENV,
})

export const validEnvNameOrProduction = (envName: string) => {
  if (validEnvironmentNames.includes(envName)) {
    return envName
  }

  return defaultProductionEnvironmentName
}

export const isProductionMode = (): boolean =>
  productionEnvironmentNames.includes(
    validEnvNameOrProduction(process.env.NODE_ENV)
  )
