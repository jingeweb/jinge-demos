/* eslint-env node */
const path = require('path');
const prod = 'PROD' in process.env;
const { jingeLoader } = require('jinge/compiler');
const { uiRouterAlias } = require('jinge-ui-router/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry:path.join(__dirname, 'app/main.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist'
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
    contentBase: __dirname,
    port: 9000
  }
};
