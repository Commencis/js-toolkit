import { COPYRIGHT_TEXT } from '@/constants/copyright';

export function getCopyrightText(startYear: number): string {
  const currentYear = new Date().getFullYear();
  return COPYRIGHT_TEXT.replace(/{startYear}/g, startYear.toString()).replace(
    /{currentYear}/g,
    currentYear.toString()
  );
}
