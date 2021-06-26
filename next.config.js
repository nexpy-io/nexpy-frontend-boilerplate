const path = require('path')

const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withReactSvg = require('next-react-svg')

const plugins = [withMDX, withReactSvg]

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['tsx', 'mdx'],
  include: [path.resolve(__dirname, 'src/assets/svg')],
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR',
  },
}

module.exports = withPlugins([...plugins], nextConfig)
