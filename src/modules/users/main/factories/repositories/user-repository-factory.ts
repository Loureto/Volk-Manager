import { UserRepository } from "@/modules/users/data";
import { IUserRepository } from "@/modules/users/domain";
import { makeUserRemoteDatasource } from "../data";

export const makeUserRepository = (): IUserRepository => {
  return new UserRepository(makeUserRemoteDatasource());
};
