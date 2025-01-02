import { AST_TOKEN_TYPES, TSESTree } from '@typescript-eslint/utils';

export function validateCommencisCopyright(
  commentNode: string,
  isHtml: true
): boolean;

export function validateCommencisCopyright(
  commentNode?: TSESTree.Comment
): boolean;

export function validateCommencisCopyright(
  commentNode?: TSESTree.Comment | string,
  isHtml?: boolean
): boolean {
  if (isHtml) {
    return (
      typeof commentNode === 'string' &&
      commentNode.includes('Commencis') &&
      commentNode.includes('Copyright')
    );
  }
  return (
    typeof commentNode !== 'string' &&
    !!commentNode &&
    commentNode.type === AST_TOKEN_TYPES.Block &&
    commentNode.value.includes('Commencis') &&
    commentNode.value.includes('Copyright')
  );
}
