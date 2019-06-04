/* eslint-env node */
const path = require('path');
const prod = 'PROD' in process.env;
const { jingeLoader } = require('jinge/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  target: 'web',
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist')
  },
  externals: [
    function(context, request, callback) {
      if (request === 'jinge') return callback(null, 'jinge');
      if (/^jinge\//.test(request)) {
        return callback(null, request.replace(/\/|\\/g, '.'));
      }
      callback();
    }
  ],
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: jingeLoader
    }]
  },
  devServer: {
    writeToDisk: true,
    contentBase: __dirname,
    port: 9000
  }
};
