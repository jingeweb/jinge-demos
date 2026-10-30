import { $ } from 'bun';
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PKGS_DIR = path.resolve(__dirname, 'packages');
const DOCS_DIR = path.resolve(__dirname, 'docs');
const REPO_URL = 'https://github.com/jingeweb/jinge-demos/tree/master';
// demo 的 vite base 是 /jinge-demos/<dir>/，首页链接必须带上同样的前缀，
// 否则在 /jinge-demos 这类不带尾部斜杠的地址下访问时，相对链接会解析到根路径。
const DEMO_BASE = '/jinge-demos';

interface DemoMeta {
  dir: string;
  title: string;
  desc: string;
  order: number;
  source: string;
}

async function isDir(p: string) {
  try {
    return (await stat(p)).isDirectory();
  } catch {
    return false;
  }
}

async function readDemoMeta(pkgDir: string, sourceDir: string): Promise<DemoMeta | undefined> {
  let pkg: { jingeDemo?: Omit<DemoMeta, 'source'> & { dir?: string } };
  try {
    pkg = JSON.parse(await readFile(path.join(pkgDir, 'package.json'), 'utf-8'));
  } catch {
    return undefined;
  }
  const meta = pkg.jingeDemo;
  if (!meta) return undefined;
  return {
    dir: meta.dir ?? path.basename(pkgDir),
    title: meta.title,
    desc: meta.desc,
    order: meta.order ?? 1000,
    source: `${REPO_URL}/${sourceDir}`,
  };
}

async function collectDemos(): Promise<DemoMeta[]> {
  const demos: DemoMeta[] = [];
  for (const entry of await readdir(PKGS_DIR)) {
    const pkgDir = path.join(PKGS_DIR, entry);
    if (!(await isDir(pkgDir))) continue;
    if (entry === 'hello-world') {
      // hello-world 下有 jinge / react / vue 三个子项目，共用一个 README
      for (const sub of await readdir(pkgDir)) {
        const subDir = path.join(pkgDir, sub);
        if (!(await isDir(subDir))) continue;
        const meta = await readDemoMeta(subDir, `packages/hello-world/${sub}`);
        if (meta) demos.push(meta);
      }
    } else {
      const meta = await readDemoMeta(pkgDir, `packages/${entry}`);
      if (meta) demos.push(meta);
    }
  }
  demos.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  return demos;
}

function escapeHtml(text: string) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

async function generateIndexHtml() {
  const demos = await collectDemos();
  const items = demos
    .map(
      (demo) => `      <li>
        <div class="row">
          <a class="title" href="${DEMO_BASE}/${demo.dir}/">${escapeHtml(demo.title)}</a>
          <a class="src" href="${demo.source}" target="_blank" rel="noreferrer">源码</a>
        </div>
        <div class="desc">${escapeHtml(demo.desc)}</div>
      </li>`,
    )
    .join('\n');

  const html = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>demos of jinge framework</title>
    <style>
      :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', sans-serif;
        color: #1f2328;
        background: #f6f7f9;
      }
      body {
        max-width: 760px;
        margin: 0 auto;
        padding: 40px 20px 80px;
      }
      h1 {
        font-size: 26px;
      }
      .intro {
        color: #656d76;
        font-size: 14px;
        line-height: 1.8;
      }
      ul {
        margin: 24px 0 0;
        padding: 0;
        list-style: none;
        border: 1px solid #d8dee4;
        border-radius: 10px;
        background: #fff;
        overflow: hidden;
      }
      li {
        padding: 14px 18px;
        border-bottom: 1px solid #eaeef2;
      }
      li:last-child {
        border-bottom: none;
      }
      .row {
        display: flex;
        align-items: baseline;
        gap: 10px;
      }
      .title {
        color: #0969da;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
      }
      .title:hover {
        text-decoration: underline;
      }
      .src {
        color: #8c959f;
        font-size: 12px;
        text-decoration: none;
      }
      .src:hover {
        color: #0969da;
      }
      .desc {
        margin-top: 3px;
        color: #656d76;
        font-size: 13px;
      }
    </style>
  </head>

  <body>
    <h1><a href="https://github.com/jingeweb/jinge" target="_blank" rel="noreferrer">jinge</a> 框架示例</h1>
    <p class="intro">
      jinge 是一个小巧的前端界面框架：基于 Proxy 实现数据绑定，使用 tsx 描述模板，不使用虚拟 DOM。
      下面是按主题排列的示例，每个示例都在独立目录里，既可以在线预览，也可以对照源码阅读。
    </p>
    <ul>
${items}
    </ul>
  </body>
</html>
`;

  await writeFile(path.join(DOCS_DIR, 'index.html'), html);
  console.info(`Generated docs/index.html with ${demos.length} demos.`);
}

const indexOnly = process.argv.includes('--index-only');

if (!indexOnly) {
  for (const pkg of await readdir(PKGS_DIR)) {
    const pkgDir = path.join(PKGS_DIR, pkg);
    const st = await stat(pkgDir);
    if (!st.isDirectory()) {
      continue;
    }
    if (pkg === 'hello-world') {
      await $`pnpm build`.cwd(path.join(pkgDir, 'jinge'));
      await $`pnpm build`.cwd(path.join(pkgDir, 'vue'));
      await $`pnpm build`.cwd(path.join(pkgDir, 'react'));
    } else {
      await $`pnpm build`.cwd(pkgDir);
    }
  }
}

await generateIndexHtml();
