import { defineConfig } from 'vite';
import { jingeVitePlugin } from 'jinge-compiler';
import path from 'node:path';

const DIR = path.basename(__dirname);
const DIST = path.resolve(__dirname, '../../docs');

// https://vitejs.dev/config/
export default defineConfig({
  base: `/jinge-demos/${DIR}/`,
  plugins: [jingeVitePlugin()],
  build: {
    emptyOutDir: false,
    outDir: path.join(DIST, DIR),
  },
});
