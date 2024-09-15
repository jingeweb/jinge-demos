import { defineConfig } from 'vite';
import { jingeVitePlugin } from 'jinge-compiler';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jinge-demos/todo-mvc/dist/',
  plugins: [
    jingeVitePlugin({
      // loadDebugNativeBinding: true,
      // importSource: true,
    }),
  ],
});
