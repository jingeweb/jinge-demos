# 事件 Events

演示 jinge 的事件绑定约定。

- 组件自定义事件：`on:change` 就是普通回调 prop
- 受控 / 非受控组件（`value` + `on:change`）
- 动态 handler（`on:click={state.handler}`）
- 捕获（`on:clickCapture`）、双击（`on:doubleClick`）、键盘事件
- 事件委托与表单提交

`on:` 是命名空间前缀，DOM 事件名会被转成小写；`doubleClick` 会被转成 `dblclick`。

运行：`pnpm dev`；构建：`pnpm build`。
