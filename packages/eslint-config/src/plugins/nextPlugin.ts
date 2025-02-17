import nextPlugin from '@next/eslint-plugin-next';

import { JSX_TSX_FILE_PATTERNS } from '@/constants';
import { type FlatConfig } from '@/types';

import { nextPluginRules } from '@/rules';

export const nextPluginConfig: FlatConfig = {
  name: 'commencis/plugin:next',
  files: JSX_TSX_FILE_PATTERNS,
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
    ...nextPluginRules,
  },
  ignores: ['.next/*'],
};
