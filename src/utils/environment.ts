import {
  PRODUCTION_ENVIRONMENT_NAMES,
  VALID_ENVIRONMENT_NAMES,
  DEFAULT_PRODUCTION_ENVIRONMENT_NAME,
} from 'constants/environment'

export const getPublicEnvironmentConfig = () => ({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_URL:
    process.env.NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_URL,
  NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_IS_ENABLED:
    process.env.NEXT_PUBLIC_ANALYTICS_METRICS_ENGINE_IS_ENABLED,
})

export const getNodeEnv = () => ({
  NODE_ENV: process.env.NODE_ENV,
})

export const validEnvNameOrProduction = (envName: string) => {
  if (VALID_ENVIRONMENT_NAMES.includes(envName)) {
    return envName
  }

  return DEFAULT_PRODUCTION_ENVIRONMENT_NAME
}

export const isProductionMode = (): boolean =>
  PRODUCTION_ENVIRONMENT_NAMES.includes(
    validEnvNameOrProduction(process.env.NODE_ENV)
  )
