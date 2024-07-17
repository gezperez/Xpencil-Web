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

  getBaseUrl = () => {
    return process.env.NEXT_PUBLIC_BASE_URL;
  };

  static setRefreshToken = (token: string) => {
    return Cookies.set('refreshToken', token, { expires: 1 });
  };

  static getRefreshToken = () => {
    return Cookies.get('refreshToken');
  };

  static removeRefreshToken = () => {
    return Cookies.remove('refreshToken');
  };

  static setAccessToken = (token: string) => {
    return Cookies.set('accessToken', token, { expires: 1 });
  };

  static getAccessToken = () => {
    return Cookies.get('accessToken');
  };

  static setUserId = (userId: number) => {
    return Cookies.set('userId', userId.toString(), { expires: 1 });
  };

  static getUserId = () => {
    return Cookies.get('userId');
  };

  static removeTokens = () => {
    Cookies.remove('refreshToken');
    Cookies.remove('accessToken');
  };

  static handleRevokeSession = async () => {
    this.retryCounter = 0;

    this.removeTokens();

    try {
    } catch (error) {
      console.error('Error handling refresh token failure:', error);
    }
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
