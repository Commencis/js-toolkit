import { DOCS_BASE_URL } from '@/constants';

export function getDocsUrls(ruleName: string): string {
  return `${DOCS_BASE_URL}${ruleName}.md`;
}
