import type { StylelintConfig } from '@/types';

import { vueCssRules } from '@/rules';

import cssConfig from './css';

const vueCssConfig: StylelintConfig = {
  ...cssConfig,
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: [...(cssConfig.extends ?? []), 'stylelint-config-html'],
      rules: {
        ...cssConfig.rules,
        ...vueCssRules,
      },
    },
  ],
};
export default vueCssConfig;
