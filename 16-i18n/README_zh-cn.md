# 国际化多语言（i18n）

中文 | [English](./)

## 开发

```bash
# 第一步，执行 jinge-i18n extract 命令，扫描所有中文词句并写入到 translate 目录下的 zh_cn.csv。
pnpm i18n:scan
# 第二步，通过手工或自动化翻译，将翻译结果写入 translate 目录下的 en.csv 和 zh_tr.csv
# 第三步，执行 jinge-i18n generate 命令，在 translate 目录下生成词典文件。
pnpm i18n:gen
# 第四步，执行常规的 dev 或 build 命令。
pnpm build
```

## 原理

jinge-i18n 采用了全新的思路来解决国际化多语言。简单讲，编译时将中文文本替换为多语言组件，每一个中文源文本对应一个组件，组件内部保存了该条中文源文本及其翻译文本的词典。换句话说，不会再将源文本和目标文本放到独立的 json 文件中并在 runtime 期间加载，而是在编译期就将所有信息放入打包的产物中。

现代 web 项目都会采用 code splitting 技术来分 chunk 优化打包产物，利用 webpack 的图优化，可以自然地将多语言文本打到不同的 chunk 中。同时，由于源文本和翻译文本都已经在打包产物中，切换语言可以做到页面无刷新和无网络请求带来的延迟。