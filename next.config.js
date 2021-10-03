const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

const plugins = [withMDX]

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['tsx', 'mdx'],
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
  },
}

module.exports = withPlugins([...plugins], nextConfig)
