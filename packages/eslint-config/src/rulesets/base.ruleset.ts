import globals from 'globals';

import type { Ruleset } from '@/types/config.types';

export const baseRuleset: Ruleset = {
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node,
      ...globals.serviceworker,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    sourceType: 'module',
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
    reportUnusedInlineConfigs: 'error',
  },
  name: '@commencis/base',
};
