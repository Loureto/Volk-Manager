import { HttpClient, HttpResponse } from "@/core";

export interface IUserRemoteDatasource {
  getUsers(): Promise<HttpResponse>;
}

export class UserRemoteDatasource implements IUserRemoteDatasource {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: HttpClient,
  ) {}

  async getUsers(): Promise<HttpResponse> {
    return await this.httpClient.request({
      url: this.baseUrl.concat("/rest/v1/people?select=*"),
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
