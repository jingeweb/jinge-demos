/* eslint-env node */
const path = require('path');
const fs = require('fs');
const prod = 'PROD' in process.env;
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');
const buildLocale = process.env.BUILD_LOCALE || 'zh_cn';

const I18N_OPTIONS = {
  mode: 'compiler-translate',
  generateCSV: 'GENERATE_I18N_CSV' in process.env, // default is true
  // idBaseDir: __dirname, // default is process.cwd()
  // checkConflict: true/false,  // if mode is production, default is true; otherwize, default is false
  translateDir: path.join(__dirname, 'translate'),
  defaultLocale: 'zh_cn',
  buildLocale
};

module.exports = {
  mode: prod ? 'production' : 'development',
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: `bundle.${buildLocale}.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  /**
   * 
   */
  plugins: [ new JingeWebpackPlugin({
    i18n: I18N_OPTIONS
  }) ],
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: {
        loader: jingeLoader,
        options: {
          i18n: I18N_OPTIONS
        }
      }
    }]
  },
  devServer: {
    writeToDisk: true,
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
          /\$LOCALE\$/g, 
          req.query.locale || 'zh_cn'
        ));
      });
    }
  }
};
