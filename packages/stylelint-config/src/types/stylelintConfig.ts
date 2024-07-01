import { Config } from 'stylelint';

type BaseConfig = Omit<Config, 'overrides' | 'extends'>;

type ConfigOverride = Omit<StylelintConfig, 'overrides'> & {
  files: string[];
};

export type StylelintConfig = BaseConfig & {
  extends?: string[];
  overrides?: ConfigOverride[];
};
