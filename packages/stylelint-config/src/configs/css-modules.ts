import type { StylelintConfig } from '@/types';

import cssConfig from './css';

import { cssModulesRules } from '@/rules';

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
