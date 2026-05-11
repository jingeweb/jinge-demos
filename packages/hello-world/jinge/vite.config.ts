import { jingeVitePlugin } from 'jinge-compiler';
import path from 'node:path';
import { defineConfig } from 'vite';
const DIR = `hello-world`;
const DIST = path.resolve(__dirname, '../../../docs');

// https://vitejs.dev/config/
export default defineConfig({
  base: `/jinge-demos/${DIR}/`,
  plugins: [jingeVitePlugin()],
  server: {
    hmr: true,
  },
  build: {
    // minify: false,
    emptyOutDir: true,
    outDir: path.join(DIST, DIR),
  },
});
