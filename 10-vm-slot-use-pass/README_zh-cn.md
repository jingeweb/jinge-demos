# demo

jinge 框架的 view 层，由两个基本概念构成：元素（Element）和属性（Attribute）。其中，元素包括 DOM 元素（DOM Element，简称 DOM）和组件元素（Component Element，简称组件）；属性包括值属性、信使属性和编译属性。

本示例和此文档着重介绍属性(Attribute)。

在 jinge 中，属性包括必须的属性名和可选的属性值，其中属性名格式统一为`属性类型:属性标识`。跟传统 DOM 属性名比，额外引入了`类型`加`冒号`的前缀。当模板中的属性的属性名没有`类型:`这样的前缀时，默认是 `s:` 这样的前缀，代表值属性中的字符串形式属性。

## 值属性

值属性用于指定 DOM 属性（传统意义上的 html 元素属性），或是向组件传递输入参数（等价于 react 的 props）。值属性有两种书写形式，字符串形式和表达式形式。

#### 字符串形式属性

字符串形式的属性，会向 DOM 元素或组件传递字符串数据。这种属性，要求属性名统一以 `s:` 为前缀，其中的 `s` 代表 `string(字符串)`。但为了模板的简洁性，当属性名没有书写类型前缀时，默认为 `s:` 前缀。

````html
<p s:class="name">hello</p>
<p class="name">hello2</p>
<SomeComponent s:class="name"/>
````

以上代码里，DOM `<p>` 和组件 `SomeComponent` 都将接受名称为 class，值为字符串值 "name" 的属性。

字符串形式属性支持的字符串，其实是 es6 中的 `Template String(模板字符串)`。

````html
<p class="name ${isActive ? 'active' : ''}">hello</p>
````

以上代码里，`<p>` 元素的 `class` 属性的值，可理解成 ``` class=`name ${isActive ? 'active' : ''}` ``` 这样的 js 代码。

#### 表达式形式属性

表达式形式的属性，会向 DOM 元素或组件传递其所属的父组件的表达式值。这种属性，要求属性名称统一以 `e:` 为前缀，其中的 `e` 代表 `expression(表达式)`。 

````html
<p e:class="name">hello</p>
<SomeComponent e:class="name"/>
````

上面的代码里，假设该模板所属的组件，有一个 property 是 `name` 且值为数字 `1000`，则 DOM `<p>` 和组件 `SomeComponent` 都将接受名称为 class，值为数字 `1000` 的属性。

表达式形式的属性，接受任意合法的 es6 表达式。比如： `<p e:class="isActive ? 'active' : ''">hello</p>`。

#### 补充说明

字符串和表达式形式在本质上是完全一样的，都可以理解成 js 的表达式，因此二者在写法上可以互相转换。比如 `<p s:class="name ${isActive ? 'active' : ''}">hello</p>` 和 `<p e:class="'name' + (isActive ? 'active' : '')">hello</p>` 是等价的。

正因为如此，我们在此文档中的表述，是 `值属性有两种书写形式` 而不是 `值属性有两种类型`。

但有一点需要注意的是，为了让这两种书写形式可完全等价转换，当使用字符串形式时，如果该 Template String 内部只有一个 `${}` 包裹的表达式，则不会把这个表达式转成字符串（toString），而是会把这个表达式的值直接传递。这是唯一一点和 Template String 有不一致的地方（Template String 一定会对内部的表达式进行 toString 操作）。

## 信使属性

在 jinge 框架中，不论是 DOM 元素的原生事件，还是组件元素的输出事件，都被统一以“消息”的形式传递。我们将 DOM 和组件都视作 `信使(Messenger)`，信使会对外`通告(Notify)`消息。

信使属性就是连接信使（DOM或组件）及其接收对象（父组件或兄弟组件）的桥梁。信使属性统一以 `on:` 这样的前缀打头。以下代码展示了信使属性的基本使用。

````html
<!-- app.html -->
<button on:click="onButtonClick($event)">Click</button>
<button on:click="onButtonClick">Click2</button>
<button on:click="onButtonClick(...args)">Click3</button>
<input e:value="val" on:input="val = $event.target.value"/>
<SomeComponent on:some-message="handleMessage(...args)"/>
````

````js
/* app.js */
class App extends Component {
  construcotr(attrs) {
    super(attrs);
    this.val = "hello";
  }
  onButtonClick($event) {

  }
  handleMessage(...args) {
    console.log(...args); // output : ['a', 19, true]
  }
}
````

````js
/* SomeComponent.js */
class SomeComponent extends Component {
  someOperate() {
    this.notify('some-message', 'a', 19, true);
  }
}
````

每一个组件都继承自 `Messenger` 对象，因此组件有 `notify` 函数可以直接使用。

信使属性的属性名里的`on:`后面的标识，是具体的消息名称。对 DOM 元素就是事件名称，对组件元素就是 `notify` 函数通知的消息类型。

信使属性的属性值，是任意合法的 js 脚本。在底层的实现里，属性值对应的 js 脚本，会被包裹在这样一个函数中 `function(...args) { /* 属性值 */ }`，这也是上述示例代码 `...args` 的出现的原因。通过 es6 的 `...args` 语法，我们将消息发出方和接收方完全解耦。这种解耦有优点也有缺点，只不过 jinge 框架选择了这样的一种模式。

对于 DOM 元素，为了方便使用，在编译器层面会将 `$event` 替换成 `args[0]`，以方便更直观地传递 `DOM Event`。此外，如果属性值是一个简单的变量类型，则编译器会自动将属性值变成一个函数调用。比如 `<A on:a="handleA" on:b="boy.handleB" />` 会被转成完全等价的代码 `<A on:a="handleA(...args)" on:b="boy.handleB(...args)" />`。

额外说明下，信使属性的属性值，可以是任意合法的 js 脚本。比如以下这种复杂的使用：

````html
<input on:keydown="if ($event.keyCode === 13) { handleEnter(); } else if ($event.keyCode === 10) { handleEsc(); } else { handleOther($event);}" />
````

## 编译属性

编译属性是用于在编译模板阶段使用的属性，跟值属性和信使属性不同，不会体现到最终编译出来的代码里。

编译属性包括： `ref:`，`slot-pass:`，`slot-use:`, `vm-use:`，`vm-pass:`。还包括一个语法糖属性 `vm:`。

#### `ref:` 属性

跟原生 DOM 元素的 `id` 属性概念类似，但只作用于当前模板。这个属性用于将 DOM 元素或组件元素记录到到该模板所属的父组件的 `reference children map` 中，以便在父组件中可以通过 `getChild` 函数快速获取 DOM 元素或组件实例。

`ref:` 类型的属性，不需要属性值。属性名中的属性标识，代表引用的 id，在同一个模板中不能重复。 以下代码展示了基本的用法。 

````html
<!-- app.html -->
<p ref:aa>hello</p>
<Boy ref:boy />
<!-- 以下代码会导致编译失败，因为 aa 这个引用 id 在当前模板已经存在 -->
<div ref:aa>ee</div>
````

````js
/* app.js */
class App extends Component {
  afterRender() {
    console.log(this.getChild('aa')); // 获取 <p> 元素
    console.log(this.getChild('boy')); // 获取 Boy 组件的实例
    this.getChild('boy').sayHi();     // 可直接调用 Boy 组件的 api 接口。
  }
}
````

````js
/* boy.js */
class Boy extends Component {
  sayHi() {
    alert('Hi, I\'m boy');
  }
}
````

`特别提示！` jinge 框架允许父组件直接获取到子组件的实例，并使用该实例调用子组件的 api 接口。这种模式，提供了基于消息通信之外的更大的灵活性，但也可能因烂用该模式导致代码混乱。

#### `slot-pass:`， `slot-use:`，`vm-use:`，`vm-pass:` 属性

大部分情况下，组件的 view，渲染的都是该组件的模板定义的 DOM 元素和子组件，这些元素都会书写在模板代码里。但有一种情况是，需要将外部元素，传递给组件，在该组件的模板里，会嵌入这些外部元素。

在 angular 1.x 中，是通过 `ng-transclude` 来实现的该功能；在 react 中，是利用 jsx 的语法特性直接将外部元素以 props 的形式传递给组件；在原生 Web Components 中，是使用 slot 这个概念。jinge 框架也使用 slot 概念，但扩展了 `slot-pass` 和 `slot-use` 两种类型的 slot，依次是向组件传递的 slot 和使用外部传递进来的 slot 。

比如下面的例子。

组件 A:

````html
<!--
  import ComponentB from './component_b';
--> 
<ComponentB>
  <_slot slot-pass="aa">
    <_slot slot-use="aa">
      你好，这里是组件 A，但可以被外部 App 传递的 slot 覆盖.
    </_slot>
  </_slot>
</ComponentB>
<ComponentB>
  <_slot slot-pass="aa">
    你好，这里是组件 A.
  </_slot>
</ComponentB>
````

组件 B:

````html
<_slot slot-use="aa">
  你好，这里是组件 B.
</_slot>
````

外层 App:

````html
<!-- import ComponentA from './component_a'; -->
<ComponentA/>
<ComponentA>
  <_slot slot-pass="aa">这里是外部 App</_slot>
</ComponentA>
````

上述例子里，在组件 A 的模板里，有名称同为 'aa' 的两种含义的 slot，一个是向组件 B 传递的 slot，用 slot-pass: 定义，另一个是使用外部 App 传递进来的 slot，用 slot-use: 定义。

上述例子里，使用了一个编译器保留的 tag 名，`_slot`，这个下划线打头的 tag 是一个特殊 tag，代表编译器保留组件（另外一个编译器保留组件是用于处理多语言的 `<_t>`）。

当待传递的 slot 是一个简单文本（如上述例子），或是需要有多个元素时，就需要用 `<_slot>` 来包裹和传递。如果只是一个单独的 html 或 Component 元素，则可以直接在元素上使用 `slot-pass:` 或 `slot-use:`。

比如：

````html
<Coma>
  <span slot-pass:aa>a</span>
  <Comb slot-pass:bb/>
</Coma>
````

等价于：

````html
<Coma>
  <_slot slot-pass:aa><span>a</span></_slot>
  <_slot slot-pass:bb><Comb/></_slot>
</Coma>
````

