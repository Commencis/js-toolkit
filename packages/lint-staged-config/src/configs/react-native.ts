import type { Configuration } from 'lint-staged';

import { typescriptConfig } from './typescript';

export const reactNativeConfig: Configuration = {
  ...typescriptConfig,
};
