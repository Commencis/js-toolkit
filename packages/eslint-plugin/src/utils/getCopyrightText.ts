import { COPYRIGHT_TEXT } from '@/constants/copyright';

export function getCopyrightText(startYear: number, isHtml: boolean): string {
  const currentYear = new Date().getFullYear();

  const formattedText = COPYRIGHT_TEXT.replace(
    /{startYear}/g,
    startYear.toString()
  ).replace(/{currentYear}/g, currentYear.toString());

  if (isHtml) {
    return `<!--\n ${formattedText}\n-->`;
  }
  return `/*\n ${formattedText}\n */`;
}
