import { AST_TOKEN_TYPES, TSESTree } from '@typescript-eslint/utils';

import { DEFAULT_START_YEAR } from '@/constants';
import { createRule, getCopyrightText } from '@/utils';

type RuleOptions = {
  startYear?: number;
};

type MessageIds = 'missingCopyright';

export default createRule<[RuleOptions], MessageIds>({
  name: 'copyright-text',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Ensure files start with the required Commencis copyright text',
    },
    messages: {
      missingCopyright:
        'File must start with the required Commencis copyright text with correct dates.',
    },
    schema: [
      {
        type: 'object',
        properties: {
          startYear: {
            type: 'number',
            default: DEFAULT_START_YEAR,
          },
        },
        additionalProperties: false,
      },
    ],
    fixable: 'code',
  },
  defaultOptions: [{ startYear: DEFAULT_START_YEAR }],

  create(context, [options]) {
    const startYear = options.startYear ?? DEFAULT_START_YEAR;
    const isHtml = context.filename.endsWith('.vue');

    const expectedCopyrightText = getCopyrightText(startYear, isHtml);

    return {
      Program(node: TSESTree.Program): void {
        const sourceCode = context.sourceCode.getText();
        const comments = context.sourceCode.getAllComments();
        const trimmedText = sourceCode.trimStart();

        const isCopyrightValid = trimmedText.startsWith(expectedCopyrightText);

        if (!isCopyrightValid) {
          const firstComment = comments[0];
          const isCommencisCopyrightTextExists =
            firstComment &&
            firstComment.type === AST_TOKEN_TYPES.Block &&
            firstComment.value.includes('Copyright') &&
            firstComment.value.includes('Commencis');

          context.report({
            node,
            messageId: 'missingCopyright',
            fix(fixer) {
              const insertText = `${expectedCopyrightText}\n\n`;

              return isCommencisCopyrightTextExists
                ? fixer.replaceText(firstComment, insertText)
                : fixer.insertTextBeforeRange([0, 0], insertText);
            },
          });
        }
      },
    };
  },
});
