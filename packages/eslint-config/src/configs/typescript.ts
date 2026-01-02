import { defineConfig } from 'eslint/config';

import { configFactory } from '@/lib/configFactory';

export const typescriptConfig = configFactory({
  typescript: true,
});

export default defineConfig(typescriptConfig);
