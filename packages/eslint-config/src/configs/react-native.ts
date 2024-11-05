import baseConfig from '@/configs/base';
import prettierConfig from '@/configs/prettier';
import typescriptConfig from '@/configs/typescript';

import {
  jsxA11yPluginConfig,
  reactHooksPluginConfig,
  reactPluginConfig,
} from '@/plugins';
import type { FlatConfigArray } from '@/types';

export default [
  ...baseConfig,
  ...typescriptConfig,
  reactPluginConfig,
  reactHooksPluginConfig,
  jsxA11yPluginConfig,
  ...prettierConfig,
  { name: 'commencis/react-native' },
] as FlatConfigArray;
