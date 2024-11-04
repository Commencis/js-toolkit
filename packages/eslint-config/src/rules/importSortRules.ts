import { Linter } from '@typescript-eslint/utils/ts-eslint';

export const importSortRules: Linter.RulesRecord = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // Side effects
        ['^\\u0000'],

        // Main frameworks & libraries
        [
          '^react',
          '^next',
          '^vue',
          '^nuxt',
          '^@angular(/.*|$)',
          '^expo',
          '^node',
        ],

        // External packages
        ['^@commencis', '^@?\\w'],

        // Internal common directories
        [
          '^@?/?(configs(s?)|types(s?)|constants(s?)|helpers(s?)|utils(s?)|lib(s?)|providers(s?))(/.*|$)',
        ],

        // Internal directories
        ['^@/'],

        // Components
        ['((.*)/)?(layouts|pages|modules|features|components)/'],

        // Relative parent imports: '../' comes last
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

        // Relative imports: './' comes last
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

        // Styles
        ['^.+\\.(s?css|(style(s)?)\\..+)$'],

        // Static assets
        ['(asset(s?)|public|static|images)(/.*|$)', '^.+\\.svg$', '^.+\\.png$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};
