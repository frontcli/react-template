module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0',
      },
    ],
    '@babel/preset-react',
    "@babel/preset-typescript"
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator'
  ]
}