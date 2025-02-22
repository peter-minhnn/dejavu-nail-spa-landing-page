import { cn } from '@/lib/utils';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  className?: string;
}

export function MainLayout(props: Readonly<MainLayoutProps>) {
  return (
    <main className={cn('', props.className)}>
      <title>{props.pageTitle}</title>
      {props.children}
    </main>
  );
}
