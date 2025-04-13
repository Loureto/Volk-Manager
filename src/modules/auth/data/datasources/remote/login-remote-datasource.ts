import { HttpClient, HttpResponse } from "@/core";
import { Login } from "../../../domain";

export interface IAuthRemoteDatasource {
  login(params: Login.Params): Promise<HttpResponse<Login.Model>>;
}

export class AuthRemoteDatasource implements IAuthRemoteDatasource {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: HttpClient,
  ) {}

  async login(params: Login.Params): Promise<HttpResponse<Login.Model>> {
    return await this.httpClient.request({
      url: this.baseUrl.concat("/auth/v1/token?grant_type=password"),
      method: "post",
      body: params,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
