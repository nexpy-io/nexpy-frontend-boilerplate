import dotenv from 'dotenv'

dotenv.config()

module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    NEXPY_PUBLIC_API_URL: process.env.NEXPY_PUBLIC_API_URL,
    NEXPY_NODE_ENV: process.env.NEXPY_NODE_ENV,
    NEXPY_SENTRY_URL: process.env.NEXPY_SENTRY_URL,
  },
}
