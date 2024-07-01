import vuePlugin from 'eslint-plugin-vue';

import { FlatConfig } from '@/types';

export const vuePluginConfig: FlatConfig = {
  ...vuePlugin.configs.recommended,
  name: 'commencis/plugin:vue',
};
