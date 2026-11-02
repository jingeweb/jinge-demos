import { readdir, access } from 'node:fs/promises';
import path from 'node:path';
export const root = path.resolve(import.meta.dirname, '../..');
export const site = path.join(root, 'test/.site');
export const results = path.join(root, 'test/.results');
export async function findDemos() {
  const demos = [];
  async function add(relative, name) {
    const directory = path.join(root, 'packages', relative);
    await access(path.join(directory, 'vite.config.ts'));
    demos.push({ name, directory });
  }
  for (const entry of await readdir(path.join(root, 'packages'), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'hello-world') {
      const variants = await readdir(path.join(root, 'packages', entry.name), {
        withFileTypes: true,
      });
      for (const variant of variants) {
        if (!variant.isDirectory()) continue;
        await add(
          `hello-world/${variant.name}`,
          variant.name === 'jinge' ? 'hello-world' : `hello-world-${variant.name}`,
        );
      }
    } else await add(entry.name, entry.name);
  }
  return demos.sort((a, b) => a.name.localeCompare(b.name));
}
