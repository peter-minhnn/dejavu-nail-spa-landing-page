import { Locale } from '@/shared/i18n/config';
import { routing } from '@/shared/i18n/routing';
import { getRequestConfig } from 'next-intl/server';

// Mapping of locales to timezones
const localeToTimeZone: Record<Locale, string> = {
  // en: "America/New_York",
  vi: 'Asia/Ho_Chi_Minh',
  en: 'America/New_York',
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  // Get the timezone based on the locale
  const timeZone = localeToTimeZone[locale as Locale];

  return {
    locale,
    messages: (await import(`./messages/${locale}/index.ts`)).default,
    timeZone,
    now: new Date(),
  };
});
