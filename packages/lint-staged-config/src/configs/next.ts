import { SCSS } from '@/constants';
import { STYLELINT } from '@/helpers';

import { typescriptConfig } from './typescript';

export const nextConfig = {
  ...typescriptConfig,
  [SCSS]: [STYLELINT],
};
