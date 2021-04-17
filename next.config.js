require('dotenv').config()

module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    NEXPY_PUBLIC_API_URL: process.env.NEXPY_PUBLIC_API_URL,
    NEXPY_PUBLIC_NODE_ENV: process.env.NEXPY_PUBLIC_NODE_ENV,
    NEXPY_SENTRY_URL: process.env.NEXPY_SENTRY_URL,
  },
}
