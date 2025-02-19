import { Locale, locales } from '@/shared/i18n/config';
import { LocalesProvider } from '@/shared/providers/locale-provider';
import QueryProvider from '@/shared/providers/query-provider';
import { useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

const NextProgress = dynamic(() => import('@/shared/components/next-progress'));

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = useLocale();

  if (!locales.includes(locale as Locale)) {
    return notFound();
  }

  setRequestLocale(locale);

  return (
    <LocalesProvider locale={locale as Locale}>
      <QueryProvider>
        {children}
        <NextProgress />
      </QueryProvider>
    </LocalesProvider>
  );
}
