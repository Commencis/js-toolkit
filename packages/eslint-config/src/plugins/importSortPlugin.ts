import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

import { importSortRules } from '@/rules';
import type { FlatConfig } from '@/types';

export const importSortPluginConfig: FlatConfig = {
  name: 'commencis/plugin:simple-import-sort',
  plugins: {
    'simple-import-sort': simpleImportSortPlugin,
  },
  rules: {
    ...importSortRules,
  },
};
