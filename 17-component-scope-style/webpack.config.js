/* eslint-env node */
const path = require('path');
const prod = 'PROD' in process.env;
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry:path.join(__dirname, 'index.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  node: false,
  devtool: prod ? false : 'source-map',
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: jingeLoader
    }, {
      test: /\.scss$/,
      use: [ jingeLoader, {
        loader: 'sass-loader',
        options: { sourceMap: true }
      } ]
    }]
  },
  devServer: {
    static: __dirname,
    port: 9000
  }
};
