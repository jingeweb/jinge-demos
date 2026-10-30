# 动态组件

演示 `Dynamic` 与 `lazy`。

- `<Dynamic fc={...} />` 按组件类型切换
- 切换会销毁旧实例，组件内部状态不保留
- `lazy()` 异步组件：`slot:loading` / `slot:error`
- 动态 import 会被拆成独立 chunk

`Dynamic` 与 `If` 的区别：`If` 切换的是条件分支，`Dynamic` 切换的是要渲染的组件类型。

运行：`pnpm dev`；构建：`pnpm build`。
