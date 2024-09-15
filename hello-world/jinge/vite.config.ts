import { defineConfig } from 'vite';
import { jingeVitePlugin } from 'jinge-compiler';
export default defineConfig({
  base: '/jinge-demos/hello-world/jinge/dist/',
  plugins: [jingeVitePlugin()],
});
