import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  entry: ['src/configs'],
  format: ['esm'],
  splitting: false,
});
