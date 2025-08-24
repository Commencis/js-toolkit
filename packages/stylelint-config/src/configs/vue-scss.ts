import type { StylelintConfig } from '@/types';

import scssConfig from './scss';

import { vueCssRules, vueScssRules } from '@/rules';

const vueScssConfig: StylelintConfig = {
  ...scssConfig,
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: [...(scssConfig.extends ?? []), 'stylelint-config-html'],
      rules: {
        ...scssConfig.rules,
        ...vueCssRules,
        ...vueScssRules,
      },
    },
  ],
};

export default vueScssConfig;
