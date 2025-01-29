/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import * as path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: __dirname,
  publicDir: 'public',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    tsconfigPaths(),
    analog({
      content: {
        highlighter: 'shiki',
      },
      prerender: {
        routes: ['/blog', '/blog/2022-12-27-my-first-post'],
      },
    }),
    tailwindcss(),
    nxViteTsPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
  server: {
    fs: {
      allow: ['../../'],
    },
  },
}));
