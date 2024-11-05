import eslint from '@eslint/js';
import globals from 'globals';

import { importSortPluginConfig } from '@/plugins';
import type { FlatConfigArray } from '@/types';

export default [
  eslint.configs.recommended,
  importSortPluginConfig,
  {
    name: 'commencis/base',
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        ...globals.serviceworker,
      },
    },
    rules: {
      'no-console': 'warn',
    },
  },
] satisfies FlatConfigArray;
