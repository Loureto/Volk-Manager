import { AxiosHttpClient } from "@/core/infra";

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};
