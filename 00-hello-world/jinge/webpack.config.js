/* eslint-env node */
const path = require('path');
const prod = 'PROD' in process.env;
const CompressionPlugin = require('compression-webpack-plugin');
const { jingeLoader } = require('jinge/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry:path.join(__dirname, 'index.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  node: false,
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: {
        loader: jingeLoader,
        // options: {
          // symbolPostfix: '__$$$$__'
        // }
      }
    }]
  },
  devServer: {
    contentBase: __dirname,
    port: 9000
  },
  plugins: [
    new CompressionPlugin()
  ]
};
