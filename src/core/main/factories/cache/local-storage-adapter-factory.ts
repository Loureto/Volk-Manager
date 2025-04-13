import { LocalStorageAdapter } from "@/core/infra";

export const makeLocalStorageAdapter = (): LocalStorageAdapter => {
  return new LocalStorageAdapter();
};
