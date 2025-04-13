import { makeApiUrl, makeHttpClientDecorator } from "@/core";
import {
  AuthRemoteDatasource,
  IAuthRemoteDatasource,
} from "@/modules/auth/data";

export const makeAuthRemote = (): IAuthRemoteDatasource => {
  return new AuthRemoteDatasource(makeApiUrl(), makeHttpClientDecorator());
};
