// import { defineConfig } from 'vite';
// import { jingeVitePlugin } from 'jinge-compiler';
// export default defineConfig({
//   build: {
//     minify: false,
//   },
//   plugins: [jingeVitePlugin()],
// });

import { defineConfig } from 'vite';
import { jingeVitePlugin } from 'jinge-compiler';

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: [
  //     {
  //       find: /^jinge$/,
  //       replacement: 'jinge/source',
  //     },
  //     {
  //       find: /^jinge-router$/,
  //       replacement: 'jinge-router/source',
  //     },
  //   ],
  // },
  build: {
    // watch: {},
    // minify: false,
    // sourcemap: true,
    // rollupOptions: {
    //   output: {
    //     entryFileNames: '[name].js',
    //   },
    // },
  },
  // server: {
  //   hmr: false,
  // },

  plugins: [
    jingeVitePlugin({
      // loadDebugNativeBinding: true,
    }),
  ],
});
