import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/configs/*'],
  format: ['esm'],
  clean: true,
});
