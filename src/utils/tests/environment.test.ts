import {
  getPublicEnvironmentConfig,
  getNodeEnv,
  validEnvNameOrProduction,
  isProductionMode,
} from 'utils/environment'

describe('[ENVS]', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
  })

  afterAll(() => {
    process.env = OLD_ENV
  })

  test(
    "Test if 'getPublicEnvironmentConfig' method returns envs with" +
      " correct value running by 'yarn test' command.",
    () => {
      process.env.NEXT_PUBLIC_API_URL = 'protocol://url_api'
      process.env.NEXT_PUBLIC_SENTRY_DSN = 'protocol://url_sentry_dsn'

      expect(getPublicEnvironmentConfig().NEXT_PUBLIC_API_URL).toBe('protocol://url_api')
      expect(getPublicEnvironmentConfig().NEXT_PUBLIC_SENTRY_DSN).toBe(
        'protocol://url_sentry_dsn'
      )
    }
  )

  test(
    "Test if 'getNodeEnv' method returns NODE_ENV with" +
      " 'test' value running by 'yarn test' command.",
    () => {
      expect(getNodeEnv().NODE_ENV).toBe('test')
    }
  )

  test(
    "Test if 'validEnvNameOrProduction' method returns a env name with" +
      " a valid production env value running by 'yarn test' command.",
    () => {
      expect(validEnvNameOrProduction('invalidName')).toBe('production')
      expect(validEnvNameOrProduction('production')).toBe('production')
    }
  )

  test(
    "Test if 'isProductionMode' method returns 'false'" + "by 'yarn test' command.",
    () => {
      expect(isProductionMode()).toBe(false)
    }
  )
})
