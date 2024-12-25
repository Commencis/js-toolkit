import { StylelintConfig } from '@/types';

import { cssRules, orderRules, styledRules } from '@/rules';

const styledComponentsConfig: StylelintConfig = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    ...cssRules,
    ...orderRules,
    ...styledRules,
  },
};

export default styledComponentsConfig;
