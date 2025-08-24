import type { Configuration } from 'lint-staged';

import { JSX_TSX } from '@/constants';
import { ESLINT } from '@/helpers';

import { baseConfig } from './base';

export const typescriptConfig: Configuration = {
  ...baseConfig,
  [JSX_TSX]: [ESLINT],
};
