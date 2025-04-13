import { ILoginUsecase, LoginUsecase } from "@/modules/auth/domain";
import { makeAuthRepository } from "../repositories";

export const makeLoginUsecase = (): ILoginUsecase => {
  return new LoginUsecase(makeAuthRepository());
};
