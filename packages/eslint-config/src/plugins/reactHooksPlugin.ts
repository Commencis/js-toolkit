import reactHooksPlugin from 'eslint-plugin-react-hooks';

import type { FlatConfig } from '@/types';
import { JSX_TSX_FILE_PATTERNS } from '@/constants';

import { reactHooksRules } from '@/rules';

export const reactHooksPluginConfig: FlatConfig = {
  name: 'commencis/plugin:react-hooks',
  files: JSX_TSX_FILE_PATTERNS,
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    ...reactHooksPlugin.configs.recommended.rules,
    ...reactHooksRules,
  },
};
