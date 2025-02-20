'use client';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { homeQueries } from '@/features/home/_hooks/use-queries';
import { TodoType } from '@/types';
import { IconRefresh } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';

export default function Hero() {
  const t = useTranslations('homeMessages');
  const [todo, setTodo] = useState<TodoType | null>(null);
  const [id, setId] = useState<number>(1);

  const { data, status } = homeQueries.useGetTodos({ id });

  const memoizedData: ReactElement | null = useMemo(() => {
    if (!todo || status === 'pending') {
      return (
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Skeleton className="h-10 w-52" />
          <Skeleton className="h-10 w-52" />
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-medium">{todo.id}</h1>
        <p className="text-lg font-bold">{todo.title}</p>
      </div>
    );
  }, [todo, status]);

  useEffect(() => {
    if (status === 'pending') return;
    setTodo(data);
    toast.success(t('success'));
  }, [status, data, t]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <Button
        variant="ringHover"
        title={t('refreshBtn')}
        onClick={() => {
          setId(id + 1);
        }}
        loading={status === 'pending'}
        disabled={status === 'pending'}
      >
        <IconRefresh size={20} />
        {t('refreshBtn')}
      </Button>
      {memoizedData}
    </div>
  );
}
