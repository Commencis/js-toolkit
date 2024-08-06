import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    watch: false,
    mockReset: true,
    coverage: {
      provider: 'v8',
      include: ['**/src/**'],
    },
  },
  esbuild: { target: 'es2020' },
});
