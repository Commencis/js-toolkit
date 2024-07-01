import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

import { FlatConfig } from '@/types';

import { importSortRules } from '@/rules';

export const importSortPluginConfig: FlatConfig = {
  name: 'commencis/plugin:simple-import-sort',
  plugins: {
    'simple-import-sort': simpleImportSortPlugin,
  },
  rules: {
    ...importSortRules,
  },
};
