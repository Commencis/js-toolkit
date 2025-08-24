import type { Linter } from '@typescript-eslint/utils/ts-eslint';

export const reactRules: Linter.RulesRecord = {
  // Disable JS specific rules
  'react/jsx-filename-extension': 'off',
  'react/default-props-match-prop-types': 'off',
  'react/prop-types': 'off',

  // Breaks @typescript-eslint/parser
  'react/jsx-indent': 'off',
  'react/no-typos': 'off',
  'react/jsx-closing-tag-location': 'off',
  'react/jsx-wrap-multilines': 'off',

  // No longer necessary
  // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',

  // We are not planning to utilize rules below
  'react/jsx-props-no-spreading': 'off',
};
