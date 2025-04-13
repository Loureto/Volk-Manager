import { IUserRepository } from "../repositories";

export interface IGetUserUsecase {
  execute(): Promise<void>;
}

export class GetUsersUsecase implements IGetUserUsecase {
  constructor(private readonly repository: IUserRepository) {}

  async execute(): Promise<void> {
    return await this.repository.getUsers();
  }
}
