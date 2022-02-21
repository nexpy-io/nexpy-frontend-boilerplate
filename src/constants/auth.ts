export const BUSINESS_NAME = 'Nexpy'

export const AUTHORIZATION_COOKIE_NAME = `${BUSINESS_NAME}.authToken`

export const REFRESH_COOKIE_NAME = `${BUSINESS_NAME}.refreshToken`

export const DEFAULT_TOKEN_TYPE = 'Bearer'

export const AUTHORIZATION_COOKIE_MAX_AGE = 60 * 60 * 24 // one day in seconds

export const REFRESH_COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // one week in seconds

export const REFRESH_REVALIDATION_MAX_ATTEMPTS = 5

export const DEFAULT_LOGIN_PAGE_REDIRECT_PATH = '/login'
