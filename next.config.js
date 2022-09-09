const { withSentryConfig } = require('@sentry/nextjs')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const runtimeCaching = require('./runtimeCaching.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('next-pwa')({
  dest: 'public',
  disable:
    process.env.NODE_ENV === 'development'
      ? !(process.env.USE_DEVELOPMENT_SERVICE_WORKER_DEBUG_MODE === 'true')
      : false,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  reloadOnOnline: true,
  maximumFileSizeToCacheInBytes: 31457280, // 30 MB
})

const plugins = [withMDX, withPWA, withBundleAnalyzer]

const sentryWebpackPluginOptions = {
  silent: true,
}

const AVAILABLE_LOCALES = ['en', 'pt']
const DEFAULT_LOCALE = 'pt'

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
]

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  publicRuntimeConfig: {
    locales: AVAILABLE_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
  },
  i18n: {
    locales: AVAILABLE_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
  },
}

module.exports = plugins.reduce((acc, plugin) => plugin(acc), {
  ...(process.env.NEXT_PUBLIC_IN_LOCAL_DEVELOPMENT
    ? nextConfig
    : withSentryConfig(nextConfig, sentryWebpackPluginOptions)),
})
