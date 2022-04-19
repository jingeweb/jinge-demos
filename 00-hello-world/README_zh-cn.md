# hello-world

中文 | [English](./)

这个示例是最基本的 hello world 示例。同时也包含 react 和 vue 的 hello world 示例以兹对照。

以下是 hello world 示例的压缩后的 minify bundle size 对照：

| 框架 | 大小 |  gzip 大小 |
| ---  | ----| ----------|
| react |  140k |  45k   |
| vue   |  55k  |  22k   |
| jinge |  12k |   4.6k |

需要注意的是，jinge 框架的定位是只考虑最新浏览器的项目，因此该示例里没有使用 babel 来转 es5，而 react/vue 都强依赖了 babel，它们的 hello world bundle size 比 jinge 多出来的部分包括了 es6 转 es5 引入的额外代码。因此上面的对照并不严格，仅供参照。