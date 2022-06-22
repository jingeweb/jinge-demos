/* eslint-env node */
const path = require('path');
const { JingeI18NRules } = require('jinge-i18n/compiler');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: 'MINIMIZE' in process.env,
  },
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].[contenthash:8].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/16-i18n/dist/',
  },
  watch: process.env.WATCH === 'true',
  node: false,
  devtool: 'source-map',
  module: {
    rules: JingeI18NRules
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
