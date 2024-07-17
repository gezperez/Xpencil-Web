import { AxiosResponse } from 'axios';

import { CreateUserDTO, UpdateUserDTO } from './dto';
import ApiBase, { RestType } from '../ApiBase';

import { User } from '@/types';

type CreateResponse = {
  accessToken: string;
  refreshToken: string;
} & User;

type GetUserResponse = User;

class UserApi extends ApiBase {
  createUser = (
    user: CreateUserDTO,
  ): Promise<AxiosResponse<CreateResponse, any>> => {
    return this.call('/user', {
      body: user,
      method: RestType.POST,
    });
  };

  updateUser = (
    user: UpdateUserDTO,
  ): Promise<AxiosResponse<CreateResponse, any>> => {
    return this.call('/user', {
      body: user,
      method: RestType.PATCH,
    });
  };

  getUser = (id: number): Promise<AxiosResponse<GetUserResponse, any>> => {
    return this.call(`/user/${id}`);
  };

  validateEmail = (email?: string) => {
    return this.call(`/auth/${email}`);
  };

  saveUserDevice = ({ userId, token }: { userId: number; token: string }) => {
    return this.call(`/user/device/${userId}/${token}`, {
      method: RestType.POST,
    });
  };

  deleteUser = (userId: number) => {
    return this.call(`/user/${userId}`, {
      method: RestType.DELETE,
    });
  };
}

export default new UserApi();
