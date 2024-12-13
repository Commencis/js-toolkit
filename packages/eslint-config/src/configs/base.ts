import eslint from '@eslint/js';
import globals from 'globals';

import { type FlatConfigArray } from '@/types';

import { importPluginConfig, importSortPluginConfig } from '@/plugins';

export default [
  eslint.configs.recommended,
  importPluginConfig,
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
