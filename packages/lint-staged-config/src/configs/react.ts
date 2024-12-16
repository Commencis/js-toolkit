import { SCSS } from '@/constants';
import { STYLELINT } from '@/helpers';

import { typescriptConfig } from './typescript';

export const reactConfig = {
  ...typescriptConfig,
  [SCSS]: [STYLELINT],
};
