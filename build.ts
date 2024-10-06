import { $ } from 'bun';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const PKGS_DIR = path.resolve(__dirname, 'packages');
for await (const pkg of await readdir(PKGS_DIR)) {
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
