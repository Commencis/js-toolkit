import type { Configuration } from 'lint-staged';

import { SCSS } from '@/constants';
import { STYLELINT } from '@/helpers';

import { typescriptConfig } from './typescript';

export const reactConfig: Configuration = {
  ...typescriptConfig,
  [SCSS]: [STYLELINT],
};
