module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      'http': require.resolve('stream-http'),
      'https': require.resolve('https-browserify'),
      'stream': require.resolve('stream-browserify'),
      'timers': require.resolve('timers-browserify'),
      'vm': require.resolve('vm-browserify'),
    }
  },
  entry: './electron/main.ts',
  module: {
    rules: require('./rules.webpack'),
  }
}