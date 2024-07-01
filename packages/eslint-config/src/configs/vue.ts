import baseConfig from '@/configs/base';
import prettierConfig from '@/configs/prettier';
import typescriptConfig from '@/configs/typescript';

import type { FlatConfigArray } from '@/types';

import { vuePluginConfig } from '@/plugins';

export default [
  ...baseConfig,
  ...typescriptConfig,
  vuePluginConfig,
  ...prettierConfig,
  { name: 'commencis/vue' },
] as FlatConfigArray;
