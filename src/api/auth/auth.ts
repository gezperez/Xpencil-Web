import { AxiosResponse } from 'axios';

import { LoginUserDTO } from './dto';
import ApiBase, { RestType } from '../ApiBase';

import { User } from '@/types';

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
} & User;

type RefreshTokenResponse = {
  accessToken: string;
};

class AuthApi extends ApiBase {
  loginUser = (
    user: LoginUserDTO,
  ): Promise<AxiosResponse<LoginResponse, any>> => {
    return this.call('/auth/login', { body: user, method: RestType.POST });
  };

  refreshToken = (
    refreshToken?: string,
  ): Promise<AxiosResponse<RefreshTokenResponse, any>> => {
    return this.call('/auth/refresh', {
      body: { refreshToken },
      method: RestType.POST,
    });
  };
}

export default new AuthApi();
