import globalAxiosInstance from '@/shared/config/axios.config';

const getTodos = async ({ id }: { id: number }) => {
  try {
    const response = await globalAxiosInstance.get('/todos/' + id);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const homeServices = {
  getTodos,
};
