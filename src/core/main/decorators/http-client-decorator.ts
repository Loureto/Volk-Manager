import { GetStorage, HttpClient, HttpRequest, HttpResponse } from "@/core";

export class HttpClientDecorator implements HttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient,
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const account = this.getStorage.get("account");
    const apiKey = import.meta.env.VITE_SUPABSE_KEY;

    if (!account?.accessToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: `Bearer ${account.access_token}`,
        }),
      });
    }

    Object.assign(data, {
      headers: Object.assign(data.headers || {}, {
        apikey: apiKey,
      }),
    });

    const httpResponse = await this.httpClient.request(data);
    return httpResponse;
  }
}
