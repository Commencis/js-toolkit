import type {
  EmptyLineBeforeOption,
  OrderAtRule,
  OrderRule,
  PropertyOrderLogicalGroup,
} from '@/types';

export function createLogicalGroup(
  groupName: string,
  properties: string[],
  emptyLineBefore: EmptyLineBeforeOption = 'always'
): PropertyOrderLogicalGroup {
  return {
    groupName,
    properties,
    emptyLineBefore,
    noEmptyLineBetween: true,
    order: 'flexible',
  };
}

export function createAtRule(name: string, hasBlock: boolean): OrderAtRule {
  return {
    name,
    hasBlock,
    type: 'at-rule',
  };
}

export function createRule(selector: string): OrderRule {
  return {
    selector: `&${selector}`,
    type: 'rule',
  };
}
