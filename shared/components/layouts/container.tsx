import { cn } from '@/lib/utils';
import { Footer } from '@/shared/components/layouts/footer';
import { Navbar } from '@/shared/components/layouts/nav-bar';
import React, { ReactElement, useMemo } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  pageTitle: string;
  header?: boolean;
}

export function Container(props: Readonly<ContainerProps>) {
  const { children, header = true } = props;

  const memoizedHeader: ReactElement | null = useMemo(() => {
    if (!header) return null;

    return <Navbar />;
  }, [header]);

  return (
    <>
      <title>{props.pageTitle}</title>
      {memoizedHeader}
      <div className={cn('container mx-auto p-8 xl:px-0', props.className)}>
        {children}
        <Footer />
      </div>
    </>
  );
}
