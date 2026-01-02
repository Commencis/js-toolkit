import {
  commencisBaseConfig,
  commencisPrettierConfig,
  commencisTypescriptConfig,
  defineConfig,
} from '@commencis/eslint-config';

export default defineConfig(
  ...commencisBaseConfig,
  ...commencisTypescriptConfig,
  ...commencisPrettierConfig,
  {
    ignores: ['**/dist/', 'coverage'],
  }
);
