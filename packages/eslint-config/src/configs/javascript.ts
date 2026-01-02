import { defineConfig } from 'eslint/config';

import { configFactory } from '@/lib/configFactory';

export const javascriptConfig = configFactory();

export default defineConfig(javascriptConfig);
