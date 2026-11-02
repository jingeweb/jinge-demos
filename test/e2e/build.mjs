import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { build } from 'vite';

import { findDemos, site } from './demos.mjs';
const demos = await findDemos();
await mkdir(site, { recursive: true });
for (const demo of demos) {
  console.log(`Building e2e demo: ${demo.name}`);
  await build({
    root: demo.directory,
    configFile: path.join(demo.directory, 'vite.config.ts'),
    logLevel: 'warn',
    build: { outDir: path.join(site, demo.name), emptyOutDir: true },
  });
}
await writeFile(path.join(site, 'demos.json'), JSON.stringify(demos.map((d) => d.name)));
console.log(`Built ${demos.length} demos for browser tests.`);
