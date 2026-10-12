import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  deps: {
    onlyBundle: ['@commitlint/types', 'conventional-commits-parser'],
  },
});
