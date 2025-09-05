import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { Stores } from '@/store';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const resourceReqInterceptor = (config: InternalAxiosRequestConfig) => {
  const modifiedConfig = { ...config };
  const _token = Stores.AuthStore.accessToken;

  if (_token && modifiedConfig.headers) modifiedConfig.headers.Authorization = `Bearer ${_token}`;

  return modifiedConfig;
};

const resourceResInterceptor = (response: AxiosResponse) => response;

const resourceResErrorInterceptor = async (error: AxiosError) => {
  if (error.response && error.config) {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if ([401, 403].includes(error.response.status) && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh_token = Stores.AuthStore.refreshToken;
      let token = '';

      if (refresh_token) {
        const res = await Stores.AuthStore.fetchNewToken();
        token = res || '';
      }

      if (token) {
        originalRequest.headers.Authorization = 'Bearer ' + Stores.AuthStore.accessToken;
        return finMedServer(originalRequest);
      }
      Stores.AuthStore.clearStore();
    }
  }

  return Promise.reject(error);
};

const finMedServer = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json'
  }
});

export const finMedServerwithoutInterceptor = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json'
  }
});

export const uninterceptedServer = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json'
  }
});

export default finMedServer;

finMedServer.interceptors.request.use(resourceReqInterceptor);

finMedServer.interceptors.response.use(resourceResInterceptor, resourceResErrorInterceptor);
