import { describe, expect, it } from 'vitest';

import commitlintConfig from './index';

describe('commitlint-config', () => {
  // TODO: Detailed test scenarios to be added

  it('should enforce scope to be lower-case', () => {
    expect(commitlintConfig.rules?.['scope-case']).toEqual([
      2,
      'always',
      'lower-case',
    ]);
  });
});
