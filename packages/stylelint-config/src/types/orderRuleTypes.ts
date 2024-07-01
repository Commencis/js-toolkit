export type EmptyLineBeforeOption = 'always' | 'never' | 'threshold';

export type PropertyOrderLogicalGroup = {
  groupName?: string;
  emptyLineBefore?: EmptyLineBeforeOption;
  noEmptyLineBetween?: boolean;
  order?: 'flexible';
  properties: string[];
};

export type OrderAtRule = {
  type: 'at-rule';
  name?: string;
  parameter?: string | RegExp;
  hasBlock?: boolean;
};

export type OrderRule = {
  type: 'rule';
  name?: string;
  selector: string | RegExp;
};
