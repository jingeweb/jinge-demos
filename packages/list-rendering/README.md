# 列表渲染

演示 `<For>` 与 `.map()` 的编译结果。

- keyed / unkeyed 的 DOM 复用差异（在输入框里输入内容后重排即可看到）
- 嵌套列表
- 基础类型数组与 `KEY_DATA`
- `nextTick()`：修改数据后 DOM 更新是异步的

`key` 必须写在 map 回调返回的第一个根元素上；基础类型数组可以用 `KEY_DATA` / `KEY_INDEX`。
`isFirst / isLast` 暂未提供，可用 `each.index` 与数组长度自行计算。

运行：`pnpm dev`；构建：`pnpm build`。
