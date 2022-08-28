import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../const';
import { getToken } from './token';
import {StatusCodes} from 'http-status-codes';
import { processErrorHandle } from './error-handler';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response &&
        (error.response.status === StatusCodes.BAD_REQUEST ||
          error.response.status === StatusCodes.NOT_FOUND)) {
        processErrorHandle(error.response.data.error);
      }
      throw error;
    }
  );

  return api;
};
