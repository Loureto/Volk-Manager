import { Account } from "./account";

export namespace Login {
  export type Params = {
    email: string;
    password: string;
  };

  export type Model = Account | undefined;
}
