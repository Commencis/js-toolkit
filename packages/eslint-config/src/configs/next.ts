import type { FlatConfigArray } from '@/types';

import baseConfig from '@/configs/base';
import prettierConfig from '@/configs/prettier';
import typescriptConfig from '@/configs/typescript';
import {
  jsxA11yPluginConfig,
  nextPluginConfig,
  reactHooksPluginConfig,
  reactPluginConfig,
} from '@/plugins';

export default [
  ...baseConfig,
  ...typescriptConfig,
  reactPluginConfig,
  reactHooksPluginConfig,
  jsxA11yPluginConfig,
  nextPluginConfig,
  ...prettierConfig,
  { name: 'commencis/next' },
] as FlatConfigArray;
