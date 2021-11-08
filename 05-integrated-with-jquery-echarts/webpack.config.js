/* eslint-env node */
const path = require('path');
const prod = 'PROD' in process.env;
const { jingeLoader } = require('jinge/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry:path.join(__dirname, 'index.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist'
  },
  externals: {
    jquery: 'jQuery',
    echarts: 'echarts'
  },
  node: false,
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: jingeLoader
    }]
  },
  devServer: {
    static: __dirname,
    port: 9000
  }
};
