import { StylelintConfig } from '@/types';

import { vueCssRules, vueScssRules } from '@/rules';

import scssConfig from './scss';

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
