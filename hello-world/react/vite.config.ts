import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/jinge-demos/hello-world/react/dist/',
  plugins: [react()],
});
