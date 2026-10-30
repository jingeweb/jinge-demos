# 国际化 i18n

> 完整的提取、翻译、编译与运行时用法见 [USAGE.md](./USAGE.md)。

演示 jinge 内置的国际化能力。

- 编译期把 `t('默认文本')` 替换成 6 位 key
- 参数插值、富文本、属性上的翻译
- `intlSetLocale` 切换语言、`intlWatchLocale` 订阅
- `intl-extract` / `intl-compile` CLI 工作流
- `dictLoader` 按需加载语言包

常用命令：

```bash
pnpm dev           # 本地预览
pnpm intl:extract  # 从源码提取文案到 intl/translate.csv
pnpm intl:compile  # 从 CSV 生成 intl/zh.tsx、intl/en.tsx
pnpm build         # 生产构建
```
