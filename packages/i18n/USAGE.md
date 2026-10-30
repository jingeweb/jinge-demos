# 国际化（i18n）使用说明

这个示例演示 jinge 内置 i18n 的完整流程：**编写 `t()` → 提取 key → 翻译 CSV → 编译字典 → 运行时切换语言**。

> 运行示例：`pnpm dev`；构建示例：`pnpm build`。

## 1. 它是怎么工作的

1. 模板里的 `t('默认文本')` 在**编译期**被替换成 `t('ab12Cd', undefined, '默认文本')`，其中 `ab12Cd` 是默认文本的 hash（sha512 → base64 → 前 6 位），也可以用 `{ key: '...' }` 显式指定。
2. 运行时从当前语言的字典里按 key 取值；开发模式保留默认文本作为兜底，生产构建默认丢弃默认文本。
3. 语言切换时，模板中由 `t()` 生成的文本节点 / 属性会被自动更新（编译器会为它们建立 `IntlWatcher` / `renderIntlText` 绑定）。

## 2. 目录结构

```
i18n/
├─ intl/
│  ├─ translate.csv   # 提取结果 + 各语言翻译（需要提交）
│  ├─ zh.tsx          # intl-compile 生成的字典（需要提交）
│  └─ en.tsx
├─ src/
│  ├─ index.ts        # intlInit + 字典加载
│  └─ app.tsx         # t() 的使用
└─ vite.config.ts     # jingeVitePlugin({ intl: true })
```

## 3. 开启国际化

在 `vite.config.ts` 中打开 `intl`：

```ts
export default defineConfig({
  plugins: [jingeVitePlugin({ intl: true })],
});
```

- `serve` 模式：`dropDefaultText` 默认为 `false`，字典缺失时仍显示默认文本。
- `build` 模式：`dropDefaultText` 默认为 `true`，默认文本不会进入产物，**必须保证字典完整**。

## 4. 支持的写法

### 4.1 纯文本

```tsx
<p>{t('这是一段普通的静态文本。')}</p>
```

### 4.2 带参数

默认文本里必须包含 `{参数名}`，翻译里使用同名占位符：

```tsx
<p>{t('你好，{name}！', { name: state.name })}</p>
```

参数是响应式的：`state.name` 变化时文本会更新，不需要重新渲染组件。

### 4.3 富文本

标签名对应 params 里的 key，值是一个接收 `children` 的渲染函数：

```tsx
{
  t('点击<a>{action}</a>查看详情。', {
    action: t('这里'),
    a: (children) => (
      <a className="link" href="#details">
        {children}
      </a>
    ),
  });
}
```

英文翻译可以写成 `Click <a>{action}</a> for details.`。

注意：

- 富文本的默认文本里**必须至少有一个 `{变量}` 占位符**，否则 `intl-extract` 会报错。
- 编译字典时会根据 CSV 的 `file` 列回读源文件，从调用处取出标签的渲染函数；所以移动 / 重命名源文件后要重新提取。

### 4.4 属性

```tsx
<input placeholder={t('请输入你的名字')} />
```

属性上的 `t()` 会被编译成 `IntlWatcher`，语言切换时属性值也会更新。

### 4.5 显式 key

```tsx
{
  t('带显式 key 的文本：{value}', { value: state.count }, { key: 'demo.explicit' });
}
```

适合希望 key 稳定、不随文案修改而变化的场景。当前编译器要求显式 key 必须同时提供 params。

### 4.6 事件回调里的文本

当前编译器对**表达式体**的箭头函数不会进入函数体做 i18n 转换，对**块体**箭头函数会：

```tsx
// 不会被转换：运行时拿中文原文当 key 查字典，切换语言后不生效
on:click={() => (message = t('按钮已点击'))}

// 会被转换：点击时按当前语言取值
on:click={() => {
  message = t('按钮已点击');
}}
```

即便如此，仍然推荐把翻译放在模板里、回调只修改状态，这样语言切换时界面会自动更新：

```tsx
<button on:click={() => (state.clicked = !state.clicked)}>
  {state.clicked ? t('按钮已点击') : t('点击我')}
</button>
```

## 5. CLI 工作流

本示例在 `package.json` 里预置了两个脚本：

```json
{
  "scripts": {
    "intl:extract": "intl-extract --lang zh,en src",
    "intl:compile": "intl-compile"
  }
}
```

### 5.1 提取

```bash
pnpm intl:extract
```

会扫描 `src` 下的 `.ts` / `.tsx`，把 `t('...')` 的默认文本、hash key、来源文件写入 `intl/translate.csv`，并保留已有翻译。

CSV 列：

| 列          | 含义                                                    |
| ----------- | ------------------------------------------------------- |
| `id`        | 6 位 hash key，或显式指定的 key                         |
| `file`      | 源文件相对路径（`intl-compile` 用它回读富文本标签定义） |
| `orig`      | 默认文本                                                |
| `zh` / `en` | 各语言翻译                                              |

### 5.2 翻译

直接编辑 CSV 的语言列即可（也可以用表格软件打开）。不要手改 `id`；修改默认文案会导致 hash 变化。

### 5.3 编译

```bash
pnpm intl:compile
```

读取 `intl/translate.csv`，生成 `intl/zh.tsx`、`intl/en.tsx`：

- 纯文本 → 字符串
- 带参数 → ``(props) => `...${props.x}...` ``
- 富文本 → 组件函数

### 5.4 加载字典

```ts
import { intlInit } from 'jinge';

import zh from '../intl/zh';

await intlInit({
  defaultLocale: 'zh',
  dicts: { zh },
  dictLoader: async (locale) => {
    if (locale === 'en') {
      const mod = await import('../intl/en');
      return mod.default;
    }
    throw new Error(`unsupported locale: ${locale}`);
  },
});
```

- `dicts`：直接注册的字典；
- `dictLoader`：未注册的语言按需加载（返回 `Promise<Dict>`），适合做语言包分包。

## 6. 运行时 API

| API                                                | 说明                                            |
| -------------------------------------------------- | ----------------------------------------------- |
| `intlInit({ defaultLocale, dicts?, dictLoader? })` | 初始化并设置默认语言                            |
| `intlSetLocale(locale)`                            | 切换语言（异步，会等待字典加载）                |
| `intlGetLocale()`                                  | 读取当前语言                                    |
| `intlWatchLocale(fn, immediate?)`                  | 订阅语言变化，返回取消订阅函数                  |
| `t(text, params?, options?)`                       | 模板 / 代码中取翻译；编译后第一个参数会变成 key |

## 7. 限制与注意事项

- **只在 `.tsx` 中写 `t()`**：当前编译器只对 `.tsx` 做模板 / i18n 转换，`.ts` 文件里的 `t()` 不会被替换成 key。
- **事件回调里的 `t()` 有写法限制**：只有块体箭头函数（`() => { ... }`）会被编译器转换；表达式体（`() => foo(t('...'))`）不会。更推荐在模板里渲染翻译文本。
- **默认文案改动会导致 key 变化**：需要重新 `intl:extract`，旧翻译需要迁移。
- **生产构建丢弃默认文本**：`dropDefaultText` 默认 `true`，字典缺 key 时界面会直接显示 hash。
- **富文本依赖源文件**：`intl:compile` 会根据 CSV 的 `file` 列回读源码，移动文件后请重新提取。
- **不支持 `import { t as xxx }` 别名**：编译器按函数名 `t` 识别。
- **显式 key 需要 params**：当前实现要求 `t(text, params, { key })` 三个参数同时存在。

## 8. 本示例覆盖的点

- 纯文本、带参数文本、显式 key
- 属性上的 `t()`
- 富文本（保留 `<a>` 标签）
- 模板中的条件文本
- 语言切换（`intlSetLocale` + `intlWatchLocale`）
- 字典按需加载（`dictLoader` + 动态 import）
- 完整的 extract / translate / compile 工作流
