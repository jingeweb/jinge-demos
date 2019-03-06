# demo

jinge 框架在 webpack 的打包的阶段，除了对 html 模板进行编译外，还会将所有组件元素（Component）进行处理。处理组件，主要是对组件的构建函数进行处理，使得构造函数返回的类实例，是经过 Proxy 处理后的 ViewModel。

在 jinge 框架中，默认所有继承自 Component 类的子类都是组件。由于 javascript 语言的动态特性，很难完全精准地识别到所有继承自 Component 类的子类，因此我们约定只考虑最常规的场景，即声明的组件直接继承自从 jinge 中导入的 Component 基类。

但在某些项目里，我们需要为所有组件定义通用的行为，比如添加一个自定义的通过属性或函数，或是在生命周期函数中默认执行统一的行为。

在这个场景下，最直观的解决方案是，自定义一个 CustomBaseComponent 继承自 jinge 框架提供的基本 Component，然后所有的业务组件继承自该 CustomBaseComponent。

但由于 javascript 语言的动态特性，很难在编译阶段（而非 runtime 时）精确获取类的继承关系。因此，需要主动告知编译器，哪些类是属于组件基类。编译器会将所有按正常方式定义的继承自这些基类的子类，识别为组件类，并处理该组件。

通过 webpack 的配置参数 `componentBase` 可以实现该自定义组件基类的声明和注册。详见配置文件 [webpack.config.js](./webpack.config.js) 里的代码和注释。