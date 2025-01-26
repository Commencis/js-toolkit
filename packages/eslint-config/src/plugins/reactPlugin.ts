import reactPlugin from 'eslint-plugin-react';

import { JSX_TSX_FILE_PATTERNS } from '@/constants';
import { type FlatConfig } from '@/types';

import { reactRules } from '@/rules';

const { recommended: recommendedConfig, 'jsx-runtime': jsxRuntimeConfig } =
  reactPlugin.configs.flat;

export const reactPluginConfig: FlatConfig = {
  name: 'commencis/plugin:react',
  files: JSX_TSX_FILE_PATTERNS,
  languageOptions: {
    ...recommendedConfig.languageOptions,
  },
  plugins: {
    react: reactPlugin,
  },
  rules: {
    ...recommendedConfig.rules,
    ...jsxRuntimeConfig.rules,
    ...reactRules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
