import tseslint from 'typescript-eslint';

import { type FlatConfigArray } from '@/types';

import baseConfig from '@/configs/base';
import prettierConfig from '@/configs/prettier';
import typescriptConfig from '@/configs/typescript';
import { vuePluginConfig } from '@/plugins';

export default [
  ...baseConfig,
  ...typescriptConfig,
  ...vuePluginConfig,
  ...prettierConfig,
  {
    plugins: {
      'typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
  },
  { name: 'commencis/vue' },
] as FlatConfigArray;
