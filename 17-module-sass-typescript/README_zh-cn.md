# 组件作用域内样式

现代 mvvm 框架很多都支持将 css 样式控制在组件内部作用域，这样可以实现不同模块之间的 css 的隔离，避免冲突。

比如，vue 框架有 [Scoped CSS](https://vue-loader.vuejs.org/guide/scoped-css.html)， angular 框架有 [Component Styles](https://angular.io/guide/component-styles)。

jinge 框架也效仿这些主流框架，支持作用域内样式。只需要在组件类的静态 `style` 属性里，提供 css 代码，编译器会自动将其转换，从而约束在该组件的作用域里。比如：

````js
import { Component } from 'jinge';

export class App extends Component {
  static get style() {
    return 'div { color: red; }';
  }
  static get template() {
    return '<div>hello, world</div>';
  }
}
````

如果需要使用 `scss` 或 `less` 等预编译器，则必须将样式代码写在独立的文件里，然后在组件中 `import`。比如：

````js
import { Component } from 'jinge';
import _sty from './app.scss';
export class App extends Component {
  static get style() {
    return _sty;
  }
  static get template() {
    return '<div>hello, world</div>';
  }
}
````

此外，还需要在 `webpack.config.js` 中指定编译后的 css 代码再交给 `jingeLoader` 处理下：

````js
// webpack.config.js
{
  module: {
    rules: [{
      test: /\.scss$/,
      // 注意 webpack loader 的处理顺序，先由对应的 css 预编译器处理，再由 jingeLoader 处理生成的 css 代码。
      use: [ jingeLoader, {
        loader: 'sass-loader',
        options: { sourceMap: true }
      } ]
    }]
  }
}
````

详细配置参看本示例下的 `webpack.config.js` 文件。