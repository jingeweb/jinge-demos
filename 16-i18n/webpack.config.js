/* eslint-env node */
const path = require('path');
const fs = require('fs');
const prod = 'PROD' in process.env;
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  watch: 'WATCH' in process.env,
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devtool: prod ? false : 'source-map',
  plugins: [ new JingeWebpackPlugin({
    i18n: {
      // // 翻译资源 csv 文件的存放路径
      // translateDir: path.join(process.cwd(), 'translate'),
      // 生成的字典资源文件名，默认为 locale.[locale].js 
      // filename: 'locale.[locale].js',
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
    contentBase: __dirname,
    port: 9000,
    before: function(app, server) {
      /**
       * 这里模拟服务器渲染 index.html，简单地从 url 中拿到语言。
       * 实际项目中，index.html 可以根据用户的配置，
       * 或者 cookies 等，决定加载的语言。
       */
      app.get('/', function(req, res) {
        res.send(fs.readFileSync(
          path.join(__dirname, 'index.html'),
          'utf-8'
        ).replace(
          /locale\.zh_cn(\.min)?\.js/, 
          `locale.${req.query.locale || 'zh_cn'}.js`
        ));
      });
    }
  }
};
