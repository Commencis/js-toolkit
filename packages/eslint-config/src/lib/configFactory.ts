import type { FlatConfig } from '@/types/config.types';

import {
  baseRuleset,
  ignoresRuleset,
  importRuleset,
  javascriptRuleset,
  nextRuleset,
  prettierRuleset,
  reactRuleset,
  typescriptRuleset,
} from '@/rulesets';

export type ConfigFactoryOptions = {
  typescript?: boolean;
  react?: boolean;
  reactCompiler?: boolean;
  jsxA11y?: boolean;
  nextjs?: boolean;
};

export function configFactory(options?: ConfigFactoryOptions): FlatConfig {
  const { typescript, react, reactCompiler, jsxA11y, nextjs } = options ?? {};

  const config: FlatConfig = [
    baseRuleset,
    javascriptRuleset,
    importRuleset,
    ...(typescript ? [typescriptRuleset] : []),
    ...(react ? [reactRuleset({ reactCompiler, jsxA11y })] : []),
    ...(nextjs ? [nextRuleset] : []),
    prettierRuleset,
    ignoresRuleset,
  ];

  return config;
}
