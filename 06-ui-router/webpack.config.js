/* eslint-env node */
const path = require('path');
const prod = 'PROD' in process.env;
const { JingeComponentRule, JingeTemplateRule } = require('jinge-compiler');
const { UIRouterAlias } = require('jinge-ui-router/compiler');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry:path.join(__dirname, 'index.js'),
  output: {
    filename: `bundle.${prod ? 'min.' : ''}js`,
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devtool: 'source-map',
  module: {
    rules:  [JingeComponentRule, {
      test: JingeTemplateRule.test,
      use: {
        loader: JingeTemplateRule.use,
        options: {
          componentAlias: UIRouterAlias
        }
      }
    }]
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
