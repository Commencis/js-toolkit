import reactPlugin from 'eslint-plugin-react';

import { JSX_TSX_FILE_PATTERNS } from '@/constants';
import { type FlatConfig } from '@/types';

import { reactRules } from '@/rules';

export const reactPluginConfig: FlatConfig = {
  name: 'commencis/plugin:react',
  files: JSX_TSX_FILE_PATTERNS,
  languageOptions: { ...reactPlugin.configs.flat.recommended.languageOptions },
  plugins: {
    react: reactPlugin,
  },
  rules: {
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactPlugin.configs.flat['jsx-runtime'].rules,
    ...reactRules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
