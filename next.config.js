const withPlugins = require('next-compose-plugins')
const path = require('path')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withReactSvg = require('next-react-svg')

const plugins = [withMDX, withReactSvg]

const nextConfig = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['tsx', 'mdx'],
  include: [path.resolve(__dirname, 'src/assets/svg')],
}

module.exports = withPlugins([...plugins], nextConfig)
