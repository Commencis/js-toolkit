import { JSON, MDX } from '@/constants';
import { PRETTIER } from '@/helpers';

export const baseConfig = {
  [JSON]: [PRETTIER],
  [MDX]: [PRETTIER],
};
