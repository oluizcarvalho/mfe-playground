import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/mfe-playground/remote-vue/' : '/',
  plugins: [
    vue(),
    federation({
      name: 'remote-vue',
      filename: 'remoteEntry.js',
      exposes: { './App': './src/App.vue' },
      shared: ['vue'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: { port: 4203, cors: true },
  preview: { port: 4203, cors: true },
}));
