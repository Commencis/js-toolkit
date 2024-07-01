import { Linter } from '@typescript-eslint/utils/ts-eslint';

export const reactHooksRules: Linter.RulesRecord = {
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
};
