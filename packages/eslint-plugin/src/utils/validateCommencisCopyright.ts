import { AST_TOKEN_TYPES, TSESTree } from '@typescript-eslint/utils';

export function validateCommencisCopyright(
  comment?: TSESTree.Comment | string
): boolean {
  if (typeof comment === 'string') {
    return comment.includes('Commencis') && comment.includes('Copyright');
  }
  return (
    !!comment &&
    comment.type === AST_TOKEN_TYPES.Block &&
    comment.value.includes('Commencis') &&
    comment.value.includes('Copyright')
  );
}
