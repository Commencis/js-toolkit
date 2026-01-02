import type { Ruleset } from '@/types/config.types';

export const ignoresRuleset: Ruleset = {
  ignores: [
    '**/node_modules',

    '**/.yarn',
    '**/.yalc',
    '**/package-lock.json',
    '**/yarn.lock',
    '**/pnpm-lock.yaml',

    '**/dist',
    '**/build',
    '**/out',
    '**/storybook-static',

    '**/coverage',
    '**/__snapshots__',

    '**/.nuxt',
    '**/.next',
    '**/.svelte-kit',
    '**/next-env.d.ts',

    '**/.changeset',
    '**/.idea',
    '**/.cache',

    '**/CHANGELOG*.md',
    '**/LICENSE*',
  ],
  name: '@commencis/ignores',
};
