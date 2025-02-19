import { Locale } from '@/shared/i18n/config';
import { useMessages, NextIntlClientProvider, useTimeZone } from 'next-intl';
import type { FC, ReactNode } from 'react';

export const LocalesProvider: FC<{
  children: ReactNode;
  locale: Locale;
}> = ({ children, locale }) => {
  const messages = useMessages();
  const timezone = useTimeZone();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timezone}
    >
      {children}
    </NextIntlClientProvider>
  );
};
