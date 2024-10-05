import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
const DIR = `hello-world-${path.basename(__dirname)}`;
const DIST = path.resolve(__dirname, '../../../docs');

// https://vitejs.dev/config/
export default defineConfig({
  base: `/jinge-demos/${DIR}/`,
  plugins: [vueJsx()],
  build: {
    emptyOutDir: false,
    outDir: path.join(DIST, DIR),
  },
});
