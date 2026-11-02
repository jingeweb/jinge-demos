# 示例浏览器 e2e

使用 Playwright 驱动真正的 Chrome headless，从用户视角操作所有 20 个示例。
测试先用各示例原有的 Vite 配置构建生产包，再通过 HTTP 按
`/jinge-demos/<示例>/` 部署路径访问，覆盖资源加载、动态 chunk、CSS 与路由。
测试产物只写入 `test/.site/`，不会运行会改写 `docs/` 的根 `pnpm build`。

## 运行

需要 Node.js 22.12+、pnpm，以及 Google Chrome。

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install --with-deps chrome  # 本机已有 Chrome 时无需安装
pnpm test                                      # 构建全部示例并运行全部 e2e
pnpm test:e2e --grep 'todo-mvc:'                # 指定示例，仍先构建所有示例
pnpm test:e2e test/e2e/forms.spec.mjs           # 指定测试文件
pnpm test:e2e --headed                         # 在可见窗口中观察操作
```

只修改测试、没有修改示例源码时，可以复用已经构建的测试产物：

```sh
pnpm test:e2e:build
pnpm exec playwright test --config test/e2e/playwright.config.mjs
pnpm exec playwright test --config test/e2e/playwright.config.mjs --grep 'context:'
```

`PLAYWRIGHT_CHANNEL=chromium` 可切换到 Playwright Chromium，此时先执行
`pnpm exec playwright install chromium`。默认验证仍使用实际 Google Chrome。
测试服务器只监听 `127.0.0.1:5199`，通过 `DEMOS_TEST_PORT` 可修改端口。

## 用例设计

用例通过按钮、键盘、输入框、原生选择器、对话框、悬浮和浏览器刷新/历史操作驱动页面，
不读取或修改组件 VM，不调用 ECharts 内部 API，不手工派发动画结束事件。
断言针对可见内容、控件状态、CSS、图表提示、DOM 输入保留，以及 watch 示例明确要求观察的控制台输出。

| 示例                          | 用户操作与验证                                                               |
| ----------------------------- | ---------------------------------------------------------------------------- |
| hello-world/jinge、react、vue | 阅读问候语、窄屏展示、刷新后仍可加载                                         |
| if                            | 隐藏/显示，验证 If 与三元表达式同步切换、恢复                                |
| watch                         | 点击 Test1/2/3，观察属性、深层路径和整体替换的通知                           |
| ref-and-life-cycle            | 接受初始弹窗、调用暴露 API、隐藏/重建组件，确认新实例名称和清理日志          |
| recursion-component           | 阅读完整树、最深层缩进、滚动到末尾、刷新                                     |
| context                       | 切换主题/主色，禁用/解锁表单，修改标签宽度并输入                             |
| slots                         | 读取兜底、命名和透传插槽；使用作用域字段；输入更新插槽内容且不失焦           |
| events                        | 计数步长、受控/非受控输入、动态 handler、捕获/冒泡、双击、键盘、委托和提交   |
| styling                       | 明暗、主色、圆角、激活态及键盘控制进度，验证 CSS 和 SVG                      |
| form                          | 编辑文字/数值/日期/简介，选择性别、城市、爱好、音量与协议，提交、锁定和重置  |
| form-input                    | 旧表单示例的输入、勾选、radio、单/多选及 model 到控件的写回                  |
| list-rendering                | keyed/unkeyed 重排后的输入保留差异、添加测量、清空后恢复、嵌套列表           |
| dynamic-components            | 切换后状态归零，真实异步 chunk 的加载提示、完成及切走后防止旧内容覆盖        |
| integrated-with-echarts       | 点击渲染，鼠标悬浮读取真实 tooltip，再次渲染不重复创建 canvas                |
| simple-todos                  | prompt 新增/修改，刷新持久化，单个/全部完成，取消、重复提示、删除和确认清空  |
| todo-mvc                      | Enter 新增、筛选和浏览器后退、双击编辑、完成全部、清除、悬浮删除及刷新持久化 |
| i18n                          | 编辑参数/计数/按钮状态后切换语言，检查属性翻译、富文本和片段导航             |
| transition                    | appear 中间透明度、隐藏后保留 DOM、退出后销毁/重建、列表退出及新增           |

Hello World 和递归树没有可操作业务控件，因此测试真实展示、响应式视口或滚动、刷新行为，
不额外给示例添加只为测试服务的按钮。

每个用例使用独立的浏览器 context，localStorage 和页面状态相互隔离。
没有默认重试、skip 或预期失败标记。公共 fixture 检查所有页面的未捕获异常、
`console.error` 和 HTTP 错误响应。显式的 watch/lifecycle 信息日志和预期的 alert/prompt/confirm 由对应场景验证。
等待使用 Playwright 的自动等待、可见状态轮询或真实 chunk 响应，不用固定 sleep 掩盖异步问题。
`coverage.spec.mjs` 对比实际示例清单、构建清单和测试场景，新增示例但未补测试时会失败。

## 报告

均在忽略的 `test/.results/` 中：

- `results.json`：机器可读结果。
- `report/`：HTML 报告，使用 `pnpm exec playwright show-report test/.results/report` 查看。
- `artifacts/`：失败时的截图、trace 与页面快照。

这组测试使用 npm 安装的 jinge、jinge-router 和 jinge-compiler，版本由 lockfile 固定。
需要跨仓库联调时，可显式切换到本地 link 依赖后重新构建测试产物。

## 本次验证

2026-11-02，本机 Google Chrome headless 下：20 个示例构建成功，45 项检查全部通过
（44 个用户场景和 1 个覆盖清单检查），没有跳过或重试。`pnpm lint` 和
`pnpm install --frozen-lockfile` 也通过。
