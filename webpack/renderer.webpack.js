module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      timers: require.resolve('timers-browserify'),
      vm: require.resolve('vm-browserify'),
    },
  },
  module: {
    rules: require('./rules.webpack'),
  },
}