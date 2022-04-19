/* eslint-env node */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prod = 'PROD' in process.env;
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');
const { routerAlias } = require('jinge-router/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    chunkFilename: prod ? '[contenthash].min.js' : '[name].[contenthash:8].bundle.js',
    publicPath: '/dist/'
  },
  node: false,
  devtool: prod ? false : 'source-map',
  plugins: [ new JingeWebpackPlugin({
    i18n: {
      // 翻译资源 csv 文件的存放路径，默认为项目根目录下的 translate 子目录。
      // translateDir: path.join(process.cwd(), 'translate'),
      // 默认语言，即源代码里需要翻译的文本串的默认编程语言
      defaultLocale: 'zh_cn'
    }
  }) ],
  module: {
    rules: [{
      test: /\.c.(js|html)$/,
      use: {
        loader: jingeLoader,
        options: {
          componentAlias: routerAlias
        }
      }
    }, {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }]
  },
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
