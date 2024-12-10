import reactPlugin from 'eslint-plugin-react';

import { JSX_TSX_FILE_PATTERNS } from '@/constants';
import { type FlatConfig } from '@/types';

import { reactRules } from '@/rules';

const reactPluginFlatConfig = reactPlugin.configs.flat as Record<
  string,
  reactPlugin.ReactFlatConfig
>;

export const reactPluginConfig: FlatConfig = {
  name: 'commencis/plugin:react',
  files: JSX_TSX_FILE_PATTERNS,
  languageOptions: { ...reactPluginFlatConfig.recommended.languageOptions },
  plugins: {
    react: reactPlugin,
  },
  rules: {
    ...reactPluginFlatConfig.recommended.rules,
    ...reactPluginFlatConfig['jsx-runtime'].rules,
    ...reactRules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
