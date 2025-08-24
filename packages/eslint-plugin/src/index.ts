import type { Linter } from '@typescript-eslint/utils/ts-eslint';

import packageJson from '../package.json';

import { all, recommended } from '@/configs';
import rules from '@/rules';

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
