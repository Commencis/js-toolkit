import { SCSS, VUE } from '@/constants';
import { ESLINT, STYLELINT } from '@/helpers';

import { typescriptConfig } from './typescript';

export const vueConfig = {
  ...typescriptConfig,
  [VUE]: [ESLINT, STYLELINT],
  [SCSS]: [STYLELINT],
};
