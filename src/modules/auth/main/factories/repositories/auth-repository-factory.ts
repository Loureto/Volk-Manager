import { AuthRepository } from "@/modules/auth/data/repositories";
import { IAuthRepository } from "@/modules/auth/domain";
import { makeAuthRemote } from "../data";

export const makeAuthRepository = (): IAuthRepository => {
  return new AuthRepository(makeAuthRemote());
};
