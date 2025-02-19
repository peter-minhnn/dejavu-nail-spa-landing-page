import { homeServices } from '@/features/home/home.service';
import { useQuery } from '@tanstack/react-query';

const useGetTodos = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ['todos', { id }],
    queryFn: async () => await homeServices.getTodos({ id }),
    refetchOnWindowFocus: true,
  });
};

export const homeQueries = {
  useGetTodos,
};
