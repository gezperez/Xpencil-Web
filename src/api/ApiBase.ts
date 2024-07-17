import axios, { AxiosError, AxiosRequestConfig, HttpStatusCode } from 'axios';
import Cookies from 'js-cookie';

import AuthApi from './auth';

import { ApiError } from '@/types';

const axiosInstance = axios.create();

export enum RestType {
  POST = 'POST',
  GET = 'GET',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

type RequestOptions = {
  method?: RestType;
  body?: any;
};

const MAX_RETRY_COUNT = 5;

class ApiBase {
  static version: string = '0.1';

  static timeout: number = 10000;

  static retryCounter: number = 0;

  constructor() {
    ApiBase.initInterceptors();
  }

  getBaseUrl = () => {
    return process.env.NEXT_PUBLIC_BASE_URL;
  };

  static setRefreshToken = (token: string) => {
    return Cookies.set('refreshToken', token, { expires: 7 });
  };

  static getRefreshToken = () => {
    return Cookies.get('refreshToken');
  };

  static removeRefreshToken = () => {
    return Cookies.remove('refreshToken');
  };

  static setAccessToken = (token: string) => {
    return Cookies.set('accessToken', token, { expires: 7 });
  };

  static getAccessToken = () => {
    return Cookies.get('accessToken');
  };

  static removeTokens = () => {
    Cookies.remove('refreshToken');
    return Cookies.remove('accessToken');
  };

  static handleRevokeSession = async () => {
    this.retryCounter = 0;

    this.removeTokens();

    try {
    } catch (error) {
      console.error('Error handling refresh token failure:', error);
    }
  };

  static tokenInterceptor = async (error: AxiosError & ApiError) => {
    const originalRequest = error.config;

    if (
      error.statusCode === HttpStatusCode.Unauthorized &&
      this.retryCounter < MAX_RETRY_COUNT
    ) {
      try {
        this.retryCounter += 1;

        const refreshToken = this.getRefreshToken();

        const newAccessToken = await AuthApi.refreshToken(refreshToken);

        this.setAccessToken(newAccessToken.data.accessToken);

        if (originalRequest) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken.data.accessToken}`;
          return axios(originalRequest);
        }

        return Promise.reject(error);
      } catch (e) {
        throw e;
      }
    }

    if (this.retryCounter >= MAX_RETRY_COUNT) {
      return this.handleRevokeSession();
    }

    return Promise.reject(error);
  };

  static errorInterceptor = (
    error: AxiosError<ApiError>,
  ): Promise<AxiosError & ApiError> => {
    if (error.response) {
      let message = '';

      if (error?.response?.data?.message) {
        if (Array.isArray(error.response.data.message)) {
          message = error.response.data.message.join('\n');
        } else {
          message = error?.response?.data?.message;
        }
      }

      const customError = {
        ...error,
        statusCode: error.response.data.statusCode,
        message,
      };

      return Promise.reject(customError);
    }

    return Promise.reject(error);
  };

  static initInterceptors = () => {
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => this.errorInterceptor(error).catch(this.tokenInterceptor),
    );
  };

  call = async (url: string, options: RequestOptions = {}) => {
    const accessToken = ApiBase.getAccessToken();

    const newUrl = this.getBaseUrl() + url;

    const newMethod = options.method || RestType.GET;
    const newTimeout = ApiBase.timeout;
    const newHeaders = {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      Version: ApiBase.version,
      OperativeSystem: 'Web',
    };
    const config: AxiosRequestConfig = {
      url: newUrl,
      method: newMethod,
      data: options?.body,
      timeout: newTimeout,
      headers: newHeaders,
    };

    return axiosInstance(config);
  };
}

export default ApiBase;
