import type { StylelintConfig } from '@/types';

import { cssModulesRules } from '@/rules';

import cssConfig from './css';

const cssModulesConfig: StylelintConfig = {
  ...cssConfig,
  overrides: [
    {
      files: ['**/*.module.css'],
      rules: {
        ...cssConfig.rules,
        ...cssModulesRules,
      },
    },
  ],
};

export default cssModulesConfig;
