/* eslint-env node */
const path = require('path');
const { JingeRules } = require('jinge-compiler');

module.exports = {
  mode: 'production',
  entry:path.join(__dirname, 'index.js'),
  optimization: {
    minimize: 'MINIMIZE' in process.env
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist'
  },
  node: false,
  devtool: 'source-map',
  module: {
    rules: JingeRules
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
