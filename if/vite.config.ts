import { defineConfig } from 'vite';
import { jingeVitePlugin } from 'jinge-compiler';
export default defineConfig({
  plugins: [jingeVitePlugin()],
});
