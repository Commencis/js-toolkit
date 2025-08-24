import type { Configuration } from 'lint-staged';

import { SCSS, VUE } from '@/constants';
import { ESLINT, STYLELINT } from '@/helpers';

import { typescriptConfig } from './typescript';

export const vueConfig: Configuration = {
  ...typescriptConfig,
  [VUE]: [ESLINT, STYLELINT],
  [SCSS]: [STYLELINT],
};
