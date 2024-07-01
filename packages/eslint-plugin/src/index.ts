import type { Linter } from '@typescript-eslint/utils/ts-eslint';

import rules from '@/rules';

import packageJson from '../package.json';
import { all, recommended } from './configs';

const plugin = {
  meta: {
    name: packageJson.name,
    version: packageJson.version,
  },
  configs: {},
  rules,
} satisfies Linter.Plugin;

Object.assign(plugin.configs, {
  all: [
    {
      plugins: { '@commencis': plugin },
      rules: all,
    },
  ],
  recommended: [
    {
      plugins: { '@commencis': plugin },
      rules: recommended,
    },
  ],
});

export default plugin;
