import tseslint from 'typescript-eslint';

import { typescriptRules } from '@/rules';
import type { FlatConfigArray } from '@/types';

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
