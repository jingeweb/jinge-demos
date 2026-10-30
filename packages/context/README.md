# 上下文 Context

演示 jinge 的 `context()`。

- 在渲染期间写入 context，子组件跨层级读取
- context 的值是 `vm`，深层组件里的读取仍然响应式
- 在 `onMount` / 事件回调里写入会抛错（此时已不在渲染期）

运行：`pnpm dev`；构建：`pnpm build`。
