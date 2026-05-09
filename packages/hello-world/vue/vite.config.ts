import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
import { defineConfig } from 'vite';
const DIR = `hello-world-${path.basename(__dirname)}`;
const DIST = path.resolve(__dirname, '../../../docs');

// https://vitejs.dev/config/
export default defineConfig({
  base: `/jinge-demos/${DIR}/`,
  plugins: [vueJsx()],
  build: {
    emptyOutDir: true,
    outDir: path.join(DIST, DIR),
  },
});
