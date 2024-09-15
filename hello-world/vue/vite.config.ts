import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/jinge-demos/hello-world/vue/dist/',
  plugins: [vueJsx()],
});
