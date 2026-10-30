# 插槽 Slots

演示 jinge 的插槽机制。

- 默认插槽（`props.children`）与兜底内容
- 命名插槽（`slot:名称` 属性）
- 作用域插槽（插槽函数接收组件传入的参数）
- 插槽透传（`slot:footer={props.children}`）
- 插槽内容中的数据绑定

插槽在编译后就是 props 上的函数，只在宿主组件渲染时调用一次；需要切换结构时请使用 `If` / `Dynamic`。

运行：`pnpm dev`；构建：`pnpm build`。
