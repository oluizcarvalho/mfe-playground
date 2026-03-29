import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/mfe-playground/remote-react/' : '/',
  plugins: [
    react(),
    federation({
      name: 'remote-react',
      filename: 'remoteEntry.js',
      exposes: { './App': './src/App.tsx' },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: { port: 4202, cors: true },
  preview: { port: 4202, cors: true },
}));
