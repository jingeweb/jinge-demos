import { spawnSync } from 'node:child_process';

import { root } from './demos.mjs';
for (const args of [
  ['test/e2e/build.mjs'],
  [
    'node_modules/@playwright/test/cli.js',
    'test',
    '--config',
    'test/e2e/playwright.config.mjs',
    ...process.argv.slice(2),
  ],
]) {
  const result = spawnSync(process.execPath, args, { cwd: root, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
