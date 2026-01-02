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
export function withTypeFirst(group: string[]): string[] {
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
export function expandFolders(folders: string[]): string[] {
  return folders.flatMap((name) => [exact(name), subpath(name)]);
}
