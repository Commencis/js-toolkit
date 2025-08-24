import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

import type { FlatConfig } from '@/types';
import { JSX_TSX_FILE_PATTERNS } from '@/constants';

export const jsxA11yPluginConfig: FlatConfig = {
  name: 'commencis/plugin:jsx-a11y',
  files: JSX_TSX_FILE_PATTERNS,
  plugins: {
    'jsx-a11y': jsxA11yPlugin,
  },
  languageOptions: { ...jsxA11yPlugin.flatConfigs.recommended.languageOptions },
  rules: {
    ...jsxA11yPlugin.flatConfigs.recommended.rules,
  },
};
