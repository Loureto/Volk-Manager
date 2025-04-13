import { HttpClient } from "@/core/data";
import { makeLocalStorageAdapter } from "../cache";
import { makeAxiosHttpClient } from "../http";
import { HttpClientDecorator } from "../../decorators";

export const makeHttpClientDecorator = (): HttpClient => {
  return new HttpClientDecorator(
    makeLocalStorageAdapter(),
    makeAxiosHttpClient(),
  );
};
