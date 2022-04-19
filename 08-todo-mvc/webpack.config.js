/* eslint-env node */
const path = require('path');
const prod = 'PROD' in process.env;
const { JingeRulesWithRouterAlias } = require('jinge-router/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry:path.join(__dirname, 'app/main.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist'
  },
  node: false,
  devtool: prod ? false : 'source-map',
  module: {
    rules: JingeRulesWithRouterAlias
  },
  devServer: {
    static: __dirname,
    port: 9000,
    hot: false,
    devMiddleware: {
      writeToDisk: true
    }
  }
};
