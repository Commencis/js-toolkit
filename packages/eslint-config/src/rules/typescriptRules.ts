import { Linter } from '@typescript-eslint/utils/ts-eslint';

export const typescriptRules: Linter.RulesRecord = {
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/array-type': 'off',

  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
};
