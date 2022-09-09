import {
  VALID_ENVIRONMENT_NAMES,
  DEFAULT_PRODUCTION_ENVIRONMENT_NAME,
} from 'constants/environment'

export const validEnvNameOrProduction = (envName: string) => {
  if (VALID_ENVIRONMENT_NAMES.includes(envName)) {
    return envName
  }

  return DEFAULT_PRODUCTION_ENVIRONMENT_NAME
}
