import { jingeVitePlugin } from 'jinge-compiler';
import path from 'node:path';
import { defineConfig } from 'vite';

const DIR = path.basename(__dirname);
const DIST = path.resolve(__dirname, '../../docs');

// https://vitejs.dev/config/
export default defineConfig({
  base: `/jinge-demos/${DIR}/`,
  plugins: [
    jingeVitePlugin({
      loadDebugNativeBinding: true,
    }),
  ],
  build: {
    emptyOutDir: true,
    outDir: path.join(DIST, DIR),
  },
});
