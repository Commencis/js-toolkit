import { StylelintConfig } from '@/types';

import { cssRules, orderRules, scssRules } from '@/rules';
import { stylisticRules } from '@/rules/stylisticRules';

const scssConfig: StylelintConfig = {
  extends: [
    'stylelint-config-standard-scss',
    '@stylistic/stylelint-config',
    'stylelint-config-prettier-scss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    ...cssRules,
    ...scssRules,
    ...orderRules,
    ...stylisticRules,
  },
};

export default scssConfig;
