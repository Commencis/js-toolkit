import { defineConfig } from 'eslint/config';

import { configFactory } from '@/lib/configFactory';

export const nextConfig = configFactory({
  typescript: true,
  react: true,
  nextjs: true,
});

export default defineConfig(nextConfig);
