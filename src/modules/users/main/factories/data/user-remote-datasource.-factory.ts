import { makeApiUrl, makeHttpClientDecorator } from "@/core";
import {
  IUserRemoteDatasource,
  UserRemoteDatasource,
} from "@/modules/users/data";

export const makeUserRemoteDatasource = (): IUserRemoteDatasource => {
  return new UserRemoteDatasource(makeApiUrl(), makeHttpClientDecorator());
};
