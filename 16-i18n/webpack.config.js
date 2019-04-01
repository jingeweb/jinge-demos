/* eslint-env node */
const path = require('path');
const prod = 'PROD' in process.env;
const { jingeLoader } = require('jinge/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  target: 'web',
  entry: {
    app: path.join(__dirname, 'src/index.js'),
    loader: path.join(__dirname, 'loader.js')
  },
  output: {
    filename: `[name].${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist')
  },
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
