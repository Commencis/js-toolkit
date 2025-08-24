import type { StylelintConfig } from '@/types';

import { cssRules, orderRules } from '@/rules';
import { stylisticRules } from '@/rules/stylisticRules';

const cssConfig: StylelintConfig = {
  extends: ['stylelint-config-standard', '@stylistic/stylelint-config'],
  plugins: ['stylelint-order'],
  rules: {
    ...cssRules,
    ...orderRules,
    ...stylisticRules,
  },
};

export default cssConfig;
