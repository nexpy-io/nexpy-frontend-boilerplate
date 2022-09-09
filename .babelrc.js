const productionPlugins = [['transform-remove-console', { exclude: ['error', 'warn'] }]]

const commonPlugins = [
  ['@hookydev/babel-plugin-styled-components', { ssr: true }],
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-throw-expressions',
  '@babel/plugin-proposal-nullish-coalescing-operator',
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
