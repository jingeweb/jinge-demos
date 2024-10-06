import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
const DIR = `hello-world-${path.basename(__dirname)}`;
const DIST = path.resolve(__dirname, '../../../docs');

// https://vitejs.dev/config/
export default defineConfig({
  base: `/jinge-demos/${DIR}/`,
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: path.join(DIST, DIR),
  },
});
