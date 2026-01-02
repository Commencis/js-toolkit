import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

import type { Ruleset } from '@/types/config.types';
import { GLOB_SRC } from '@/constants/globs';
import { expandFolders, withTypeFirst } from '@/utils/import.utils';

const GROUPS: Record<string, string[]> = {
  // Side effects (simple-import-sort prefixes side-effects with \u0000 at the start)
  SIDE_EFFECTS: ['^\\u0000'],

  // Main frameworks & libraries
  FRAMEWORKS: [
    '^(react(-native|-dom)?(/.*)?)$',
    '^next',
    '^vue',
    '^nuxt',
    '^@angular(/.*|$)',
    '^expo',
    '^node',
  ],

  // External packages
  EXTERNAL: ['^@commencis', '^@?\\w'],

  // Internal common directories
  INTERNAL_COMMON: expandFolders([
    'config',
    'types',
    'interfaces',
    'constants',
    'helpers',
    'utils',
    'lib',
  ]),

  // Component directories
  COMPONENTS: expandFolders([
    'providers',
    'layouts',
    'pages',
    'modules',
    'features',
    'components',
  ]),

  // Internal root alias (catch-all leftover @/ imports except styles and assets)
  INTERNAL_ROOT: ['^@/(?!.*\\.(s?css|svg|png)$).+$'],

  // Relative parent imports then same-dir relatives
  RELATIVE_PARENT: ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
  RELATIVE_SAME: ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

  // Assets
  ASSETS: [
    '(asset(s?)|public|static|images)(/.*|$)',
    '^@/.+\\.(svg|png)$',
    '^.+\\.svg$',
    '^.+\\.png$',
  ],

  // Styles
  STYLES: [
    // side-effect - virtual css imports
    '^\\u0000.+\\.s?css$',
    // root alias css imports
    '^@/.+\\.s?css$',
    // relative css imports
    '^(\\.{1,2}/).+\\.s?css$',
  ],
};

export const importRuleset: Ruleset = {
  files: [GLOB_SRC],
  plugins: {
    'simple-import-sort': simpleImportSortPlugin,
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          GROUPS.SIDE_EFFECTS,
          withTypeFirst(GROUPS.FRAMEWORKS),
          withTypeFirst(GROUPS.EXTERNAL),
          withTypeFirst(GROUPS.INTERNAL_COMMON),
          withTypeFirst(GROUPS.COMPONENTS),
          withTypeFirst(GROUPS.INTERNAL_ROOT),
          withTypeFirst(GROUPS.RELATIVE_PARENT),
          withTypeFirst(GROUPS.RELATIVE_SAME),
          GROUPS.ASSETS,
          GROUPS.STYLES,
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
  name: '@commencis/import',
};
