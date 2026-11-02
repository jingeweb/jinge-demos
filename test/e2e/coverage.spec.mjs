import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { findDemos, site } from './demos.mjs';
import { test, expect } from './helpers.mjs';

test('every runnable demo is built and has a dedicated user-facing scenario', async () => {
  const demos = await findDemos();
  const built = JSON.parse(await readFile(path.join(site, 'demos.json'), 'utf8'));
  expect(built).toEqual(demos.map((d) => d.name));
  const files = ['basics', 'state', 'forms', 'lists', 'dynamic', 'todos', 'i18n', 'transitions'];
  const source = (
    await Promise.all(
      files.map((name) => readFile(new URL(`./${name}.spec.mjs`, import.meta.url), 'utf8')),
    )
  ).join('\n');
  for (const demo of demos)
    expect(source, `missing scenario for ${demo.name}`).toContain(`'${demo.name}'`);
});
