import { Linter } from '@typescript-eslint/utils/ts-eslint';

export const importSortRules: Linter.RulesRecord = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // External package imports
        ['^\\w', '^@\\w'],
        // @commencis package imports
        ['^@commencis'],
        // Config, util imports
        ['(@/config|@/util)'],
        // Type imports
        ['@/type'],
        // Absolute imports
        ['^@/'],
        // Relative imports
        ['^\\.\\./', '^\\./'],
        // Style imports
        ['^.+\\.s?css$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};
