# 表单 Form

演示常见表单控件与 jinge 的绑定方式。

- `input`（text / number / password / date / range）
- `textarea`
- `select` 单选（`value` + `on:change`）
- `select` 多选（`selected` + `on:change`）
- `radio` / `checkbox`
- `fieldset disabled` 整组禁用
- 提交、重置、实时汇总（`watch` + `vmRaw`）

jinge 没有 `v-model`，统一是「属性绑定 + 事件写回」。

运行：`pnpm dev`；构建：`pnpm build`。
