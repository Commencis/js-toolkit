import baseConfig from '@/configs/base';
import prettierConfig from '@/configs/prettier';
import typescriptConfig from '@/configs/typescript';

import type { FlatConfigArray } from '@/types';

import { reactHooksPluginConfig, reactPluginConfig } from '@/plugins';

export default [
  ...baseConfig,
  ...typescriptConfig,
  reactPluginConfig,
  reactHooksPluginConfig,
  ...prettierConfig,
  { name: 'commencis/react-native' },
] as FlatConfigArray;
