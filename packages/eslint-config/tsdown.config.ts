import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/configs/*', 'src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
});
