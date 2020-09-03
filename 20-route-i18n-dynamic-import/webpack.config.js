/* eslint-env node */
const path = require('path');
const fs = require('fs');
const prod = 'PROD' in process.env;
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');
const { routerAlias } = require('jinge-router/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist'),
    chunkFilename: prod ? '[contenthash].min.js' : '[name].bundle.js',
    publicPath: 'dist/'
  },
  node: false,
  devtool: prod ? false : 'source-map',
  plugins: [ new JingeWebpackPlugin({
    chunk: {
      // 如果使用了 webpack 的 dynamic import 来拆分代码，需要配置此参数为 true。默认为 false。
      multiple: true,
      // 将 chunk 信息写入到指定的文件，方便加载到浏览器里配合 ResourceLoader 使用。默认为 null，即不写入文件。
      writeInfo: 'chunk.json',
      // 是否将 webpack 抽取的模块共用的公共 chunk 信息也写入 writeInfo 指定的文件。默认为 false。
      // includeCommon: false
    },
    style: {
      // 是否保留注释，默认为 false。
      // keepComment: false,
      // 是否将 component style 提取并合并到一个文件里，默认为 false。
      extract: true
    },
    i18n: {
      // 翻译资源 csv 文件的存放路径，默认为项目根目录下的 translate 子目录。
      // translateDir: path.join(process.cwd(), 'translate'),
      // 默认语言，即源代码里需要翻译的文本串的默认编程语言
      defaultLocale: 'zh_cn'
    }
  }) ],
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: {
        loader: jingeLoader,
        options: {
          componentAlias: routerAlias
        }
      }
    }, {
      test: /\.scss$/,
      use: [ jingeLoader, {
        loader: 'sass-loader',
        options: { sourceMap: !prod }
      } ]
    }]
  },
  devServer: {
    contentBase: __dirname,
    port: 9000,
    historyApiFallback: true
  }
};
