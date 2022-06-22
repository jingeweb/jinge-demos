/* eslint-env node */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getJingeI18NRulesWithAlias } = require('jinge-i18n/compiler');
const { RouterAlias } = require('jinge-router/compiler');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: 'MINIMIZE' in process.env
  },
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[contenthash].js',
    publicPath: 'dist/'
  },
  devtool: 'source-map',
  module: {
    rules: [...getJingeI18NRulesWithAlias(RouterAlias), {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'bundle.css',
    chunkFilename: '[contenthash].css',
  })],
  devServer: {
    static: __dirname,
    port: 9000,
    historyApiFallback: true,
    hot: false,
    devMiddleware: {
      writeToDisk: true
    }
  }
};
