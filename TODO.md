# TODO

## 待实现

### computed / 派生状态

jinge 目前没有 `computed`，派生状态只能靠：

- 模板里的内联表达式（编译器会生成 `ExprWatcher`）；
- 或者 `watch` + 一个额外的 `vm` 字段。

需要先想清楚 API 形态再动手，例如：

- `computed(fn)` 返回只读 vm？如何依赖收集（jinge 是路径通知，不是运行时依赖收集）？
- 是否需要在编译器层面识别“纯函数表达式”并自动缓存？
- 与 `watch` 的 `changedPath`、`deep` 语义如何配合？
- 组件销毁时如何释放？

在定案之前，先不做 `derived-state` 独立示例。

### admin 模板

等 `jinge-antd` 组件库打磨后，基于它做一个 `mini-admin`：

- 登录 / 权限跳转
- 侧边栏 + 嵌套路由
- 表格 + 查询表单 + 分页
- 弹窗 / 消息
- 主题与 i18n

## 暂不做

- `async-data` 独立示例：等 computed / 数据层约定清楚后再补，避免示例固化一套不成熟的模式。
- `For` 的 `isFirst / isLast`：类型里虽然声明了，但运行时并没有提供；暂不实现，业务里用 `each.index === 0` / `each.index === list.length - 1` 计算。
- 动态插槽：编译器尚未支持，等编译器补上后再加示例。
- 错误边界：框架暂无 `ErrorBoundary` / `onErrorCaptured` 一类的机制。
