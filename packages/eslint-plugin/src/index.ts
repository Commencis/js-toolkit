import type { Linter } from '@typescript-eslint/utils/ts-eslint';

import rules from '@/rules';

import packageJson from '../package.json';

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
      rules: {
        '@commencis/copyright-text': 'error',
      },
    },
  ],
  recommended: [
    {
      plugins: { '@commencis': plugin },
      rules: {
        '@commencis/copyright-text': 'off',
      },
    },
  ],
});

export default plugin;
