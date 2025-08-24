import type { Configuration } from 'lint-staged';

import { JSON, MDX } from '@/constants';
import { PRETTIER } from '@/helpers';

export const baseConfig: Configuration = {
  [JSON]: [PRETTIER],
  [MDX]: [PRETTIER],
};
