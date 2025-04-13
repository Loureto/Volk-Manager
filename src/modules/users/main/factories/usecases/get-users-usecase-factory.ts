import { GetUsersUsecase, IGetUserUsecase } from "@/modules/users/domain";
import { makeUserRepository } from "../repositories";

export const makeGetUsersUsecase = (): IGetUserUsecase => {
  return new GetUsersUsecase(makeUserRepository());
};
