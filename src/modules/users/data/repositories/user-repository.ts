import { HttpStatusCode } from "@/core";
import { IUserRepository, UserError } from "../../domain";
import { IUserRemoteDatasource } from "../datasources";

export class UserRepository implements IUserRepository {
  constructor(private readonly datasource: IUserRemoteDatasource) {}

  async getUsers(): Promise<void> {
    const response = await this.datasource.getUsers();

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body;
      case HttpStatusCode.unauthorized:
        throw UserError.accessDeniedError();
      case HttpStatusCode.notFound:
        throw UserError.notFoundError();
      default:
        throw UserError.unexpectedError();
    }
  }
}
