import { Login } from "../entities";

export interface IAuthRepository {
  login(params: Login.Params): Promise<Login.Model>;
}
