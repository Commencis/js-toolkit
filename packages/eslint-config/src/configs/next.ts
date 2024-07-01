import baseConfig from '@/configs/base';
import prettierConfig from '@/configs/prettier';
import typescriptConfig from '@/configs/typescript';

import type { FlatConfigArray } from '@/types';

import {
  nextPluginConfig,
  reactHooksPluginConfig,
  reactPluginConfig,
} from '@/plugins';

export default [
  ...baseConfig,
  ...typescriptConfig,
  reactPluginConfig,
  reactHooksPluginConfig,
  nextPluginConfig,
  ...prettierConfig,
  { name: 'commencis/next' },
] as FlatConfigArray;
