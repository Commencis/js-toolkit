import { AST_TOKEN_TYPES, TSESTree } from '@typescript-eslint/utils';

export function validateCommencisCopyright(
  commentNode?: TSESTree.Comment
): boolean {
  return (
    !!commentNode &&
    commentNode.type === AST_TOKEN_TYPES.Block &&
    commentNode.value.includes('Commencis') &&
    commentNode.value.includes('Copyright')
  );
}
