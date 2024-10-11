import { TSESTree } from '@typescript-eslint/utils';

import { createRule, getCopyrightText } from '@/utils';

import { DEFAULT_START_YEAR } from '@/constants';

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
        'File must start with the required Commencis copyright text.',
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
        const trimmedText = sourceCode.trimStart();

        if (!trimmedText.startsWith(expectedCopyrightText)) {
          context.report({
            node,
            messageId: 'missingCopyright',
            fix(fixer) {
              const insertText = `${expectedCopyrightText}\n\n`;
              return fixer.insertTextBeforeRange([0, 0], insertText);
            },
          });
        }
      },
    };
  },
});
