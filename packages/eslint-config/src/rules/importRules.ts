import { Linter } from '@typescript-eslint/utils/ts-eslint';

export const importRules: Linter.RulesRecord = {
  'import/no-duplicates': ['error', { 'prefer-inline': true }],
};
