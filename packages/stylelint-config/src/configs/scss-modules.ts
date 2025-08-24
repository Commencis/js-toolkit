import type { StylelintConfig } from '@/types';

import { cssModulesRules, scssModulesRules } from '@/rules';

import scssConfig from './scss';

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
