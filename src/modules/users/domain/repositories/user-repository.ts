export interface IUserRepository {
  getUsers: () => Promise<void>;
}
