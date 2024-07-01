import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

import { FlatConfig } from '@/types';

import { JSX_TSX_FILE_PATTERNS } from '@/constants';

export const jsxA11yPluginConfig: FlatConfig = {
  name: 'commencis/plugin:jsx-a11y',
  files: JSX_TSX_FILE_PATTERNS,
  plugins: {
    'jsx-a11y': jsxA11yPlugin,
  },
  rules: {
    ...jsxA11yPlugin.configs.recommended.rules,
  },
};
