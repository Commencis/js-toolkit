import { StylelintConfig } from '@/types';

import { styledRules } from '@/rules';

import cssConfig from './css';

const styledComponentsConfig: StylelintConfig = {
  ...cssConfig,
  customSyntax: 'postcss-styled-syntax',

  rules: {
    ...cssConfig.rules,
    ...styledRules,
  },
};

export default styledComponentsConfig;
