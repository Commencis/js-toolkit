/**
 * Glob patterns using minimatch syntax for matching source files.
 * These patterns are used to configure ESLint file matching.
 *
 * @see https://github.com/isaacs/minimatch
 */

export const GLOB_SRC = '**/*.?([cm])[jt]s?(x)';

export const GLOB_JS = '**/*.?([cm])js';
export const GLOB_JSX = '**/*.?([cm])jsx';

export const GLOB_TS = '**/*.?([cm])ts';
export const GLOB_TSX = '**/*.?([cm])tsx';
