import tseslint from 'typescript-eslint';

import { type FlatConfigArray } from '@/types';

import { typescriptRules } from '@/rules';

export default [
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    name: 'commencis/typescript',
    rules: {
      ...typescriptRules,
    },
  },
] as FlatConfigArray;
