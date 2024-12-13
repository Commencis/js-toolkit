// @ts-expect-error - eslint-plugin-import is not typed
import importPlugin from 'eslint-plugin-import';

import { FlatConfig } from '@/types';

import { importRules } from '@/rules';

export const importPluginConfig: FlatConfig = {
  name: 'commencis/plugin:import',
  plugins: {
    import: importPlugin,
  },
  rules: {
    ...importRules,
  },
};
