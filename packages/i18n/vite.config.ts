import { jingeVitePlugin } from 'jinge-compiler';
import path from 'node:path';
import { defineConfig } from 'vite';

const DIR = path.basename(import.meta.dirname);
const DIST = path.resolve(import.meta.dirname, '../../docs');

// https://vitejs.dev/config/
export default defineConfig({
  base: `/jinge-demos/${DIR}/`,
  plugins: [jingeVitePlugin({ intl: true })],
  build: {
    emptyOutDir: true,
    outDir: path.join(DIST, DIR),
  },
});
