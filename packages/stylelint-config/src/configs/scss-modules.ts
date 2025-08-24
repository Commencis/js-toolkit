import type { StylelintConfig } from '@/types';

import scssConfig from './scss';

import { cssModulesRules, scssModulesRules } from '@/rules';

const scssModulesConfig: StylelintConfig = {
  ...scssConfig,
  overrides: [
    {
      files: ['**/*.module.scss'],
      rules: {
        ...scssConfig.rules,
        ...cssModulesRules,
        ...scssModulesRules,
      },
    },
  ],
};

export default scssModulesConfig;
