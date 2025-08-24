import type { TSESTree } from '@typescript-eslint/utils';

import { DEFAULT_START_YEAR } from '@/constants';
import {
  createRule,
  getCopyrightText,
  validateCommencisCopyright,
} from '@/utils';

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
        const firstComment = context.sourceCode.getAllComments()[0];
        const trimmedText = sourceCode.trimStart();
        const isCopyrightValid = trimmedText.startsWith(expectedCopyrightText);

        if (!isCopyrightValid) {
          const isCommencisCopyrightExists = validateCommencisCopyright(
            isHtml ? trimmedText : firstComment
          );

          context.report({
            node,
            messageId: 'missingCopyright',
            fix(fixer) {
              const insertText = `${expectedCopyrightText}\n\n`;

              return isCommencisCopyrightExists
                ? isHtml
                  ? fixer.replaceTextRange([0, insertText.length], insertText)
                  : fixer.replaceText(firstComment, insertText)
                : fixer.insertTextBeforeRange([0, 0], insertText);
            },
          });
        }
      },
    };
  },
});
