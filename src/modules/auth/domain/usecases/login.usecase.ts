import { Login } from "../entities";
import { IAuthRepository } from "../repositories";

export interface ILoginUsecase {
  execute(params: Login.Params): Promise<Login.Model>;
}

export class LoginUsecase implements ILoginUsecase {
  constructor(private readonly repository: IAuthRepository) {}

  async execute(params: Login.Params): Promise<Login.Model> {
    return this.repository.login(params);
  }
}
