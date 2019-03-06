# demo

这个示例演示了如何注册全局的组件别名(component alias)，从而可以在模板里直接使用别名引用组件。

事实上，jinge 框架里，除了 html 元素外，一切都是组件元素。包括 if/for 逻辑，底层都是 If 组件和 For 组件。举例来讲，以下两种写法的代码是完全等价的。

````html
<div>
  <if e:expect="show">
  Hello, World!
  </if>
  <for e:loop="items" vm:each="item">
  ${item}
  </for>
</div>
````

上面的代码和下面的完全等价：

````html
<!--
  import { IfComponent, ForComponent} from 'jinge';
-->
<div>
  <IfComponent e:expect="show">
  Hello, World!
  </IfComponent>
  <ForComponent e:loop="items" vm:each="item">
  ${item}
  </ForComponent>
</div>
````

事实上，编译器在编译模板时，只是先简单地将 `<if>` 和 `<for>` 这样的组件别名，替换成了其实际的组件，再进行具体地编译。

jinge 框架内置的组件别名包括：`<if>`, `<for>`, `<switch>`。如果需要注册自定义的组件别名，以方便全局更便捷地使用组件（使用别名后，不再需要 import 该组件），则需要在 webpack 的配置中向 jinge 模板编译器传递 `componentAlias` 参数。

一个现成的示例是 `jinge-ui-router`，当使用该路由库来实现路由功能时，必须指定 `componentAlias` 参数，请参考示例[06-ui-router](../06-ui-router)的配置文件[webpack.config.js](../06-ui-router/webpack.config.js)。

本示例展示了在业务代码中使用组件别名的场景，详见源码。