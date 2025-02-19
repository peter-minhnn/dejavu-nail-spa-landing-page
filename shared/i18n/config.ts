export type Locale = 'vi' | 'en';
export type LocaleCurrency = 'vi-VN' | 'en-US';

export const defaultLocale: Locale = 'vi';

export const locales: Locale[] = ['vi', 'en'];

export const localeNames: Record<Locale, string> = {
  vi: 'Vietnamese',
  en: 'English',
};
