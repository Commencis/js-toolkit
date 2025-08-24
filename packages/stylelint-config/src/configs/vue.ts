import type { StylelintConfig } from '@/types';

import cssConfig from './css';

import { vueCssRules } from '@/rules';

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
