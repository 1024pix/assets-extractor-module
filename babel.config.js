module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  test: {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ]
    ]
  }
}
