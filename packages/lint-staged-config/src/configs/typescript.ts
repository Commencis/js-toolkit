import { JSX_TSX } from '@/constants';
import { ESLINT } from '@/helpers';

import { baseConfig } from './base';

export const typescriptConfig = {
  ...baseConfig,
  [JSX_TSX]: [ESLINT],
};
