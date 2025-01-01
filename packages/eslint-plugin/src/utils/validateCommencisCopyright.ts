import { AST_TOKEN_TYPES, TSESTree } from '@typescript-eslint/utils';

export function validateCommencisCopyright(
  commentNode?: TSESTree.Comment
): boolean {
  if (!commentNode) return false;
  return (
    commentNode.type === AST_TOKEN_TYPES.Block &&
    commentNode.value.includes('Commencis') &&
    commentNode.value.includes('Copyright')
  );
}
