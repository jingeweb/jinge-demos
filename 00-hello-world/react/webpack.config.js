/* eslint-env node */
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const prod = 'PROD' in process.env;

module.exports = {
  mode: prod ? 'production' : 'development',
  entry:path.join(__dirname, 'index.jsx'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist')
  },
  node: false,
  module: {
    rules: [{
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [[
            '@babel/preset-env',
            {targets: {chrome: "71"}}
          ], '@babel/preset-react']
        }
      }
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    port: 9000
  },
  plugins: [
    new CompressionPlugin()
  ]
};
