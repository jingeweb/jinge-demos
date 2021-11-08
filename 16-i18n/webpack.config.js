/* eslint-env node */
const path = require('path');
const fs = require('fs');
const prod = 'PROD' in process.env;
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  node: false,
  devtool: prod ? false : 'source-map',
  plugins: [ new JingeWebpackPlugin({
    i18n: {
      // // 翻译资源 csv 文件的存放路径
      // translateDir: path.join(process.cwd(), 'translate'),
      // 默认语言，即源代码里需要翻译的文本串的默认编程语言
      defaultLocale: 'zh_cn'
    }
  }) ],
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: {
        loader: jingeLoader
      }
    }]
  },
  devServer: {
    static: __dirname,
    port: 9000,
  }
};
