import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import { type FlatConfigArray } from '@/types';

export default [
  eslintPluginPrettierRecommended,
  { name: 'commencis/prettier' },
] as FlatConfigArray;
