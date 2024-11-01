import { Linter } from '@typescript-eslint/utils/ts-eslint';

export const importSortRules: Linter.RulesRecord = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // Side effect imports.
        ['^\\u0000'],
        // Main frameworks & libraries
        ['^react', '^next', '^vue', '^nuxt', '^@angular(/.*|$)', '^expo'],
        // External packages
        ['^@commencis', '^@?\\w'],
        ['^@/'],
        // Internal imports
        [
          '^@?/?(configs(s?)|types(s?)|constants(s?)|helpers(s?)|utils(s?)|lib(s?)|providers(s?))(/.*|$)',
        ],
        // Project folders
        ['((.*)/)?(layouts|pages|modules|features|components)/'],
        // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Styles
        ['^.+\\.(s?css|(style(s)?)\\..+)$'],
        // Images
        ['(asset(s?)|public|static|images)(/.*|$)', '^.+\\.svg$', '^.+\\.png$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};
