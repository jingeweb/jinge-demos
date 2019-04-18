# 国际化多语言（i18n）

中文 | [English](./)

## 概述

jinge 框架同时支持的两种模式的多语言，分为`字典映射模式（dictionary-reflect-mode）`和`编译器翻译模式（compiler-translate-mode)`。

字典映射模式，是加载一个语言文本的json数据，然后通过 key 在该 json 中找到对应的文本 value。诸如 [react-i18n](https://github.com/yahoo/react-intl)，[vue-i18n](https://github.com/kazupon/vue-i18n) 等就使用的是这种模式。

字典映射模式的优点主要包括：

* 思路简洁，不依赖框架，可由第三方库实现。
* 可通过 key 的跨模块引用，实现跨模块的文本复用。
* 热切换（即不重新加载系统的情况下更新界面文本的语言）的实现简单。

其缺点主要包括：

* 对于小型项目，整体方案稍显罗嗦，在文本之外，要定义额外的 key；运行时还要加载外部的 json 字典文件。
* 大型项目里，要通过良好的架构和约定才能避免跨模块的 key 冲突隐患。
* 开发阶段对字典文件的模块化组织和划分，构建阶段的字典数据的合并，需要业务层自己架构设计和实现。

编译器翻译模式，本质是在编译阶段，就由编译器翻译好文本，生成不同语言版本的最终打包文件。现阶段，angular 的 [i18n](https://angular.io/guide/i18n) 功能，基本就是这个模式。

编译器翻译模式的优点主要包括：

* 打包结果简洁，不需要 key 和额外的 json 文件。
* 架构层面不需要业务层关注模块化组织，模块间冲突等问题。

其缺点主要包括：

* 热切换实现很难（目前 jinge 框架对该模式不支持热切换）。
* 直接将服务器返回数据映射为文本时，没有字典模式灵活（字典模式可以直接将服务器返回数据作为动态的 key）。

## 字典数据模式

字典数据模式在实际使用时，又可根据项目情况选择使用 `使用 registerI18nData 加载字典的形式` 的形式还是 `从 window.JINGE_I18N_DATA 加载字典的形式`。接下来详细介绍其细节和区别。

### 使用 registerI18nData 加载字典的形式

字典数据模式，要求先使用 `registerI18nData` 注册字典数据，其后才能在 js 代码中使用 `i18n` 函数获取多语言的文本（text）以及在组件的 view 中使用`<i18n/>`组件。

当使用 `registerI18nData` 二次注册字典数据时，`i18nMessenger` 会通知 `I18N_DATA_CHANGED` 事件。对于 view 中的 `<i18n/>` 组件，会自动监听该事件，从而实现热切换。但对于 js 代码中使用 `i18n` 函数取文本的逻辑，需要手动监听该事件，手动处理相关的热切换逻辑。

`jinge-demos/16-i18n/mode-dictionary-hot` 目录下，就是这个形式的示例。

### 从 window.JINGE_I18N_DATA 加载字典的形式

很多时候，我们会在 js 文件的顶部将一个多语言文本赋值给一个常量。这种情况下存在一个问题，文件顶部的代码，在整个 bundle 加载时就已经被执行了，这时候 bootstrap 函数和 registerI18nData 函数是否已经执行很难确定（因为各文件的顶部代码的执行顺序取决于文件之间的依赖关系，即打包后在 bundle 里的次序）。

所以，如果用 `registerI18nData` 主动注册字典的模式，就不能在 js 文件顶部使用 `i18n` 函数。对于大型前端项目，这个约束很难保证，是一个潜在的坑。

为了解决这个问题，我们引入了从 window.JINGE_I18N_DATA 加载字典的形式。在整个 bundle 加载时，i18n 会直接尝试从 window.JINGE_I18N_DATA 这个全局变量上取字典数据。从而，在该 bundle 的任何地方调用 `i18n` 函数获取文本时，都能取到数据。

配合上述逻辑，一个典型的架构可以是：使用 loader 脚本，先通过 api 接口读取用户配置的语言，然后根据该配置加载多语言字典数据并赋值到 `window.JINGE_I18N_DATA` 这个全局变量，最后加载 app 的整个 bundle 代码。

但这种模式下，要处理热切换会很麻烦。因为文件顶部的代码逻辑几乎不受控于 jinge 的组件逻辑。为此，当已经通过 `window.JINGE_I18N_DATA` 赋予字典数据后，尝试再次使用 `registerI18nData` 热切换字典时，jinge 框架将给出告警。（TODO: 支持配置参数来禁用该告警）

`jinge-demos/16-i18n/mode-dictionary-window` 目录下，就是这个形式的示例。

## 编译器翻译模式

使用编译器翻译模式，需要同时使用 webpack 的 loader 和 plugin，分别是 `jingeLoader` 和 `JingeWebpackPlugin`。二者都需要通过 `i18n` 参数来配置多语言翻译，且二者的 `i18n` 参数完全一致。

### i18n 参数

`i18n` 参数的使用示例如下：

````js
// webpack.config.js
const I18N_OPTIONS = {
  mode,
  defaultLocale,
  buildLocale,
  translateDir,
  ...
};
...
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
}
````

上述代码里的 I18N_OPTIONS 参数，又包括以下项：

#### `mode` - 必要参数

这个参数决定了是使用字典映射模式还是编译器翻译模式。默认是 `dictionary-reflect`。当指定为 `compiler-translate` 时，启用编译器翻译模式。

#### `defaultLocale` - 必要参数

在源码中直接书写的默认语言。

#### `buildLocale` - 必要参数

当前构建的语言。

如果 buildLocale 和 defaultLocale 一致，则可以将默认语言的待翻译 csv 生成并写入到 translateDir 目录。

如果 buildLocale 和 defaultLocale 不一致，则会在 translateDir 目录中找到已翻译的 csv 文件，并在构建过程中应用翻译后的文本。

#### `translateDir` - 必要参数

存放翻译相关的 csv 资源文件的目录。

#### `idBaseDir` - 可选参数

翻译相关的 csv 文件里，第一列是文本 `id`。默认情况下，这个 id 是由`${文件名}/${key}`构成。其中：

`文件名`是源码文件相对于 `idBaseDir` 的相对路径。取相对路径是为了在不同操作系统环境目录下，文件名保持一致。默认的 `idBaseDir` 是 `process.cwd()`，可以指定其它值，也可以使用函数`idBaseDir: (file) => {return ...}`。需要注意的是，务必保证在使用 `path.relative(idBaseDir, filepath)` 后，在不同操作系统环境目录下，对同一个文件，这个`文件名`保持一致。

`key`是源码文件中，文本在当前源文件里的标识。当用户主动指定该标识时，使用指定标识；否则，使用该文本的 md5 hash 后的 hex 前 8 位。

#### `generateCSV` - 可选参数

当 `buildLocale` 和 `defaultLocale` 一致时，该参数指定是否向 `translateDir` 目录覆盖式写入由源码生成的待翻译 csv 文件。

该参数默认为 true。但当使用 watch 模式开发时，可选择禁用该参数，避免频繁写磁盘。

#### `checkConflict` - 可选参数

是否检查对相同文本 id 的文本值是否冲突。由于 id 是由文件名和key构成的，并且 key 默认是文本的 hash。所以只在同一个文件里，主动指定 key 时，才可能存在冲突。

在 production 模式下，默认为 true。在 development 模式下，默认为 false。

### <_t> 多语言翻译组件

在 view 模板中，使用 <_t> 这个多语言翻译组件来指定多语言文本。这是唯一一个有特殊含义的组件，即在编译器层面会特别处理。正因为其特殊性，jinge 框架要求所有组件名不能以下划线 `_` 打头，以下划线打头的组件为编译器保留组件名。当前仅支持 `_t` 这一个编译器保留组件。

该组件的属性(attribute)包括：

* `text`： 必要属性，默认语言下的文本。
* `key`：可选属性，主动指定文本的标识。
* `html`：可选属性，是否需要将文本以 html 方式渲染。
* `params`：可选属性，渲染文本时提供的参数。

该组件的使用示例如下：

````html
<_t text="你好"/>
<_t text="再见" key="goodbye"/>
<_t text="你好，{name}" params="{name: boy}"/>
<_t text="你好，<span style='color:red'>世界</span>" html/>
````

### _t 多语言翻译函数

在 javascript 代码中，可以通过 `_t` 函数来定义多语言文本。编译器会自动将该函数在构建时处理成对应的语言版本。

该函数接受三个参数，依次是 `text`, `params` 和 `key`。参数的含义，和 `<_t/>` 组件的同名属性完全一致。有一点灵活性是，当 params 参数为字符串（而不是 Object）时，会将其识别为 key 。

该函数使用示例如下：

````js
import {
  _t
} from 'pentagon';

console.log(_t('你好'));
console.log(_t('再见', 'goodbye')); // same as _t('再见', null, 'goodbye')
console.log(_t('你好，{name}', { name: this.boy }));
````
