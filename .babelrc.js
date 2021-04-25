const productionPlugins = [
  ['transform-remove-console', { exclude: ['error', 'warn'] }],
]

const commonPlugins = [
  '@babel/plugin-proposal-optional-chaining',
  ['@hookydev/babel-plugin-styled-components', { ssr: true }],
  ['module-resolver', { root: ['./src'] }],
]

const plugins =
  process.env.NODE_ENV === 'production'
    ? [...commonPlugins, ...productionPlugins]
    : [...commonPlugins]

module.exports = {
  presets: ['next/babel', '@babel/preset-typescript'],
  plugins: [...plugins],
}
