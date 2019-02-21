/* eslint-env node */
const path = require('path');
const prod = 'PROD' in process.env;
const { jingeLoader } = require('jinge/compiler');
const { uiRouterAlias } = require('jinge-ui-router/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  target: 'web',
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: {
        loader: jingeLoader,
        options: {
          componentAlias: uiRouterAlias
        }
      }
    }]
  },
  devServer: {
    writeToDisk: true,
    contentBase: __dirname,
    port: 9000
  }
};
