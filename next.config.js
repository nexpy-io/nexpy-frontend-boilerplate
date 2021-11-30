const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const plugins = [withMDX, withPWA]

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
  pageExtensions: ['tsx', 'mdx'],
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
}

module.exports = withPlugins([...plugins], nextConfig)
