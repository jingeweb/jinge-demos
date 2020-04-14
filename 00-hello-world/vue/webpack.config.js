/* eslint-env node */
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const prod = 'PROD' in process.env;

module.exports = {
  mode: prod ? 'production' : 'development',
  entry:path.join(__dirname, 'index.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist')
  },
  node: false,
  module: {
    rules: [{
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    port: 9000
  },
  plugins: [
    new VueLoaderPlugin(),
    new CompressionPlugin()
  ]
};
