/* eslint-disable @typescript-eslint/naming-convention */

import { PRODUCTION_ENVIRONMENT_NAMES } from 'constants/environment'
import { validEnvNameOrProduction } from 'utils/environment'

export const { NODE_ENV } = process.env

export const isProductionMode = PRODUCTION_ENVIRONMENT_NAMES.includes(
  validEnvNameOrProduction(NODE_ENV)
)
