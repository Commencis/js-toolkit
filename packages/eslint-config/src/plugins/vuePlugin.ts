import vuePlugin from 'eslint-plugin-vue';

import { FlatConfigArray } from '@/types';

export const vuePluginConfig: FlatConfigArray = [
  ...vuePlugin.configs['flat/recommended'],
  {
    name: 'commencis/plugin:vue',
  },
];
