import { ESLintUtils } from '@typescript-eslint/utils';

import { getDocsUrls } from './getDocsUrl';

export const createRule = ESLintUtils.RuleCreator((name) => getDocsUrls(name));
