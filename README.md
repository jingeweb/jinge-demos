# jinge demos

[English Readme](./README_en.md)

[`jinge`](https://github.com/jingeweb/jinge) 框架是一个小巧的前端界面框架。该框架基于 `Proxy` 实现数据双向绑定内核；使用 `tsx` 作为模板描述，有近乎完美的类型约束、类型提示和编码体验；但完全不使用虚拟 DOM，从而可以做到框架极度地轻巧。

你可以在当前仓库中查看各种 demo 的源码，也可以访问 Github Pages 在线体验：[https://jingeweb.github.io/jinge-demos](https://jingeweb.github.io/jinge-demos)，还可以访问框架主仓库：[https://github.com/jingeweb/jinge](https://github.com/jingeweb/jinge)。

构建全部示例：`pnpm build`（产物在 `docs/`）。本地预览：`pnpm preview:docs`，打开 [http://localhost:8080/](http://localhost:8080/)（会跳转到 `/jinge-demos/`）。

示例的 `base` 是 `/jinge-demos/`，预览脚本通过 `lightstatic --base-href` 模拟 GitHub Pages 的部署路径。

## 本地依赖

`jinge` 和 `jinge-compiler` 通过 `link:` 引用同级目录，首次构建前需要先构建它们：

```bash
(cd ../jinge && pnpm install && pnpm build)
(cd ../jinge-compiler && pnpm install && pnpm build-ts && pnpm build-cargo-debug)
```

`build-cargo-debug` 会生成 `jinge-compiler/index.node`；存在时编译器会优先使用这个本地构建的 binding。
