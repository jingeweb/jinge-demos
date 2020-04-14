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
          componentAlias: {
            /* 
             * 以下配置中，key 代表 SOURCE，value 代表从这个 SOURCE 中要引入的组件和别名子映射：
             *   该子映射中，key 代表 IMPORTED 的模块，如果是 'default' 则代表 default 模块，
             *   该子映射中，value 代表 ALIAS 别名。value 可以是数组，代表多个别名都对应该 IMPORTED 的模块。
             * 
             * 比如，以下配置：
             * 
             * {
             *   'jinge': {
             *     'IfComponent': 'if'
             *   }
             * }
             * 
             * 中，SOURCE 是 'jinge'，IMPORTED 是 IfComponent, ALIAS 是 'if',
             * 编译器会在模板中自动在文件头部插入 `import { IfComponent } from 'jinge';`
             * 并将所有 <if> 替换成 IfComponent
             * 
             * SOURCE 除了可以是 node_modules 的模块名外，也可以是绝对路径。
             * 比如本示例中以下的配置，
             * 会被转成 `import {default as Component_08927} from '/absolute_path/jinge-demos/09-component-alias/common/components/custom-component-a.js'
             * 并且所有的 <cus-com-a/> 会被替换成 Component_08927
             * 其中是 08927 是为了防止重名的随机数。
             */
            [path.join(__dirname, 'common/components/custom-component-a.js')]: {
              'default': 'cus-com-a'
            }
          }
        }
      }
    }]
  },
  devServer: {
    contentBase: __dirname,
    port: 9000
  }
};
