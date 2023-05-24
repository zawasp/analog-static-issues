/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'src', 'content', 'blog');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: true,
      static: true,
      prerender: {
        routes: async () => {
          const blogPosts = fs
            .readdirSync(directoryPath)
            .filter((file: any) =>
              fs.statSync(path.join(directoryPath, file)).isFile()
            )
            .map((file: any) => path.parse(file).name)
            .map((name: any) => `/blog/${path.basename(name)}`);
          const paths = ['/', '/about', '/blog', ...blogPosts];
          return paths;
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
