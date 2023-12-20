import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

import preact from "@preact/preset-vite";

export default defineConfig({
  root: './src',
  base: './',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    paths({ projects: ['../tsconfig.json'] }),
    preact()
  ],
});
