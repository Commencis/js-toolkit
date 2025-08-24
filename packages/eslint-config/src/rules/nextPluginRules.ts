import type { Linter } from '@typescript-eslint/utils/ts-eslint';

export const nextPluginRules: Linter.RulesRecord = {
  // Breaks with ESLint 9, should be activated after the next plugin is updated
  '@next/next/no-duplicate-head': 'off',
};
