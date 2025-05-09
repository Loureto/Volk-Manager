import { GetStorage, SetStorage } from "@/core/data/cache";

export class LocalStorageAdapter implements SetStorage, GetStorage {
  set(key: string, value: object): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }

    localStorage.removeItem(key);
  }

  get(key: string): any {
    const value = localStorage.getItem(key) || "{}";
    return JSON.parse(value);
  }
}
