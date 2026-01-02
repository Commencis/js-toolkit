import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import type { Ruleset } from '@/types/config.types';
import { GLOB_SRC } from '@/constants/globs';

export const prettierRuleset: Ruleset = {
  ...eslintPluginPrettierRecommended,
  files: [GLOB_SRC],
  name: '@commencis/prettier',
};
