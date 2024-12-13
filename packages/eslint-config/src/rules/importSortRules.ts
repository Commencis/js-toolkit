import { Linter } from '@typescript-eslint/utils/ts-eslint';

const sliceDollarSign = (str: string): string =>
  str.endsWith('$') ? str.slice(0, -1) : str;
const groupWithTypes = (regexes: string[]): string[] =>
  regexes.map((regex) => [regex, `${sliceDollarSign(regex)}.*\\u0000$`]).flat();

export const importSortRules: Linter.RulesRecord = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // Side effects
        ['^\\u0000'],

        // Main frameworks & libraries
        groupWithTypes([
          '^(react(-native|-dom)?(/.*)?)$',
          '^next',
          '^vue',
          '^nuxt',
          '^@angular(/.*|$)',
          '^expo',
          '^node',
        ]),

        // External packages
        groupWithTypes(['^@commencis', '^@?\\w']),

        // Internal common directories
        groupWithTypes([
          '^@?/?(config|types|interfaces|constants|helpers|utils|lib)(/.*|$)',
        ]),

        // Internal directories
        groupWithTypes(['^@/']),

        // Components
        groupWithTypes([
          '((.*)/)?(providers|layouts|pages|modules|features|components)/?',
        ]),

        // Relative parent imports: '../' comes last
        groupWithTypes(['^\\.\\.(?!/?$)', '^\\.\\./?$']),

        // Relative imports: './' comes last
        groupWithTypes(['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']),

        // Styles
        ['^.+\\.(s?css|(style(s)?)\\..+)$'],

        // Static assets
        ['(asset(s?)|public|static|images)(/.*|$)', '^.+\\.svg$', '^.+\\.png$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};
