import { useLocaleCookieServer } from '@/hooks/use-locale-server';
import axios, { AxiosResponse } from 'axios';

const globalAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

globalAxiosInstance.interceptors.request.use(async (config) => {
  const locale = await useLocaleCookieServer();
  config.headers['Accept-Language'] = locale ?? 'vi';
  return config;
});

globalAxiosInstance.interceptors.response.use(function (
  response: AxiosResponse
) {
  return response;
});

export default globalAxiosInstance;
