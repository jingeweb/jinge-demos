import { execFileSync } from 'node:child_process';
import { readFileSync, realpathSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const root = realpathSync(import.meta.dirname);
const require = createRequire(import.meta.url);
// Filter generated/ignored directories before invoking either tool: both CLIs
// fail when every explicitly supplied file is excluded by their ignore rules.
const ignored = [
  'docs',
  'dist',
  'lib',
  'types',
  'temp',
  'coverage',
  'node_modules',
  '.tmp',
  '.husky',
  '.idea',
  '.vscode',
  'packages/i18n/intl',
  'test/.site',
  'test/.results',
];

export default {
  '*.{js,mjs,cjs,jsx,ts,tsx}': {
    title: 'Lint and format staged source files',
    task(files, { log }) {
      const source = files.filter((file) => {
        const relative = path.relative(root, realpathSync(file)).split(path.sep).join('/');
        return !ignored.some((dir) => relative === dir || relative.startsWith(`${dir}/`));
      });
      if (source.length === 0) return;
      for (const { name, args } of [
        { name: 'oxlint', args: ['--type-aware', '--fix'] },
        { name: 'oxfmt', args: [] },
      ]) {
        const manifest = require.resolve(`${name}/package.json`);
        const pkg = JSON.parse(readFileSync(manifest, 'utf8'));
        const bin = path.resolve(path.dirname(manifest), pkg.bin[name]);
        // Pass filenames as argv, without shell parsing (including spaces/quotes).
        const output = execFileSync(process.execPath, [bin, ...args, ...source], {
          cwd: root,
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'pipe'],
        });
        if (output) log(output.trimEnd());
      }
    },
  },
};
