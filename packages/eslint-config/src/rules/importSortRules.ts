import { Linter } from '@typescript-eslint/utils/ts-eslint';

export const importSortRules: Linter.RulesRecord = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // Side effect imports.
        ['^\\u0000'],
        // Main framework & external package imports
        ['^react', '^vue', '^@angular(/.*|$)', '^next', '^nuxt', '^@?\\w'],
        // Internal imports
        ['^(asset(s?)|constant(s?)|helper(s?)|util(s?)|i18n)(/.*|$)'],
        // Components
        ['((.*)/)?components/'],
        // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Styles
        ['^.+\\.s?css$'],
        // Images
        ['public/static/images', '^.+\\.svg$', '^.+\\.png$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};
