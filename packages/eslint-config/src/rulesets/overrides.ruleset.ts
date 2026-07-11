import type { Ruleset } from '@/types/config.types';
import { GLOB_SRC } from '@/constants/globs';

export const overridesRuleset: Ruleset = {
  files: [GLOB_SRC],
  rules: {
    /**
     * The `eslint-plugin-prettier` recommended configuration disables `curly`
     * because the `multi-line` and `multi-or-nest` options conflict with Prettier.
     * Re-enable the rule here with `['error', 'all']`, which remains compatible.
     * @see https://github.com/prettier/eslint-config-prettier/issues/341
     */
    curly: ['error', 'all'],
  },
  name: '@commencis/overrides',
};
