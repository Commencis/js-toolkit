import { defineConfig } from 'eslint/config';

import { configFactory } from '@/lib/configFactory';

export const reactNativeConfig = configFactory({
  typescript: true,
  react: true,
});

export default defineConfig(reactNativeConfig);
