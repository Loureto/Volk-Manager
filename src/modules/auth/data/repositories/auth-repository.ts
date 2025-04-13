import { HttpStatusCode } from "@/core";
import { AuthError, IAuthRepository, Login } from "../../domain";
import { IAuthRemoteDatasource } from "../datasources/remote";

export class AuthRepository implements IAuthRepository {
  constructor(private readonly datasource: IAuthRemoteDatasource) {}
  async login(params: Login.Params): Promise<Login.Model> {
    const response = await this.datasource.login(params);

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body;
      case HttpStatusCode.unauthorized:
        throw AuthError.accessDeniedError();
      default:
        throw AuthError.unexpectedError();
    }
  }
}
