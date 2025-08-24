import type { Linter } from '@typescript-eslint/utils/ts-eslint';

/**
 * Turn a normal "from" regex into a “type-only” variant that matches
 * the same sources *when* they’re type-only imports.
 * simple-import-sort appends \u0000 to type-only import sources.
 */
function asTypeOnly(pattern: string): string {
  const base = pattern.endsWith('$') ? pattern.slice(0, -1) : pattern;
  return `${base}\\u0000$`;
}

// Put type-only variants first inside the same group.
function withTypeFirst(group: string[]): string[] {
  return group.flatMap((pattern) => [asTypeOnly(pattern), pattern]);
}

// Helpers to generate exact and subpath regex for @/ aliases
function exact(p: string): string {
  return `^@/${p}$`;
}

function subpath(p: string): string {
  return `^@/${p}/.+$`;
}

// Expand an array of folder names into [exact, subpath] for each
function expandFolders(folders: string[]): string[] {
  return folders.flatMap((name) => [exact(name), subpath(name)]);
}

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

  // Internal root alias (catch-all leftover @/ imports)
  INTERNAL_ROOT: ['^@/.+$'],

  // Relative parent imports then same-dir relatives
  RELATIVE_PARENT: ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
  RELATIVE_SAME: ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

  // Styles
  STYLES: ['^.+\\.(s?css|(style(s)?)\\..+)$'],

  // Assets
  ASSETS: [
    '(asset(s?)|public|static|images)(/.*|$)',
    '^.+\\.svg$',
    '^.+\\.png$',
  ],
};

export const importSortRules: Linter.RulesRecord = {
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
        GROUPS.STYLES,
        GROUPS.ASSETS,
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};
