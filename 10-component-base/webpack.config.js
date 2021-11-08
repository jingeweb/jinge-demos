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
  node: false,
  devtool: prod ? false : 'source-map',
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: {
        loader: jingeLoader,
        options: {
          componentBase: {
            /**
             * key 是在业务组件中引用该基类的引用模块名。
             * value 是该被引用的基类的文件绝对路径。
             *   如果多个文件都对外输出了同一个基类，则 value 可以是数组。
             * 如果 key 是 default，则代表该基类的输出是
             *   default 模式，在引用该基类时也是使用的 default 模式。
             */
            'default': path.join(__dirname, 'common/base_component.js')
          }
        }
      }
    }]
  },
  /**
   * 当使用了自定义基类时，该基类往往会在全局被使用。为了避免引用该基类时使用
   * 相对路径带来的啰嗦，通常会配合 resolve.alias 配置来简化引用。
   */
  resolve: {
    alias: {
      'my_base_component': path.join(__dirname, 'common/base_component.js')
    }
  },
  devServer: {
    static: __dirname,
    port: 9000
  }
};
