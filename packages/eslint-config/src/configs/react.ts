import baseConfig from '@/configs/base';
import prettierConfig from '@/configs/prettier';
import typescriptConfig from '@/configs/typescript';
import { type FlatConfigArray } from '@/types';

import {
  jsxA11yPluginConfig,
  reactHooksPluginConfig,
  reactPluginConfig,
} from '@/plugins';

export default [
  ...baseConfig,
  ...typescriptConfig,
  reactPluginConfig,
  reactHooksPluginConfig,
  jsxA11yPluginConfig,
  ...prettierConfig,
  { name: 'commencis/react' },
] as FlatConfigArray;
