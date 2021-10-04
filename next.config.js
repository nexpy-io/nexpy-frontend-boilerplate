const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withPWA = require('next-pwa')

const plugins = [withMDX, withPWA]

const nextConfig = {
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
  },
}

module.exports = withPlugins([...plugins], nextConfig)
