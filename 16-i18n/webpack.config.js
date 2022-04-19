/* eslint-env node */
const path = require('path');
const fs = require('fs');
const prod = 'PROD' in process.env;
const { JingeWebpackPlugin, jingeRule } = require('jinge/compiler_js');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/16-i18n/dist/',
  },
  watch: process.env.WATCH === 'true',
  node: false,
  devtool: 'source-map',
  plugins: [ new JingeWebpackPlugin({
    i18n: {
      // // 翻译资源 csv 文件的存放路径
      // translateDir: path.join(process.cwd(), 'translate'),
      // 默认语言，即源代码里需要翻译的文本串的默认编程语言
      defaultLocale: 'zh_cn',
      // 需要翻译支持的目标语言，比如英语和繁体中文
      targetLocales: ['en', 'zh'],
      // 是否是抽取模式，抽取所有待翻译的文案写入 csv 文件。
      extractMode: !!process.env.EXTRACT_I18N,
    }
  }) ],
  module: {
    rules: [jingeRule]
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
