# 样式 Styling

演示 jinge 的样式绑定方式。

- `className` + [cx](https://github.com/jingeweb/jinge) 组合条件 class
- `style` 只能是字符串（不是 React/Vue 的对象写法）
- 内联 CSS 变量 + class 切换实现主题
- SVG 属性绑定

jinge 没有内置 scoped CSS，组件库通常靠全局样式 + 类名前缀约定。

运行：`pnpm dev`；构建：`pnpm build`。
