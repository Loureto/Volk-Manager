import { LoginView, useLoginViewModel } from "@/modules/auth/presentation";
import { makeLoginUsecase } from "../usecases";
import { loginSchema } from "../../validations";
import { makeLocalStorageAdapter } from "@/core";

export const LoginViewFactory = () => {
  const methods = useLoginViewModel({
    auth: makeLoginUsecase(),
    storage: makeLocalStorageAdapter(),
    validation: loginSchema,
  });

  return <LoginView {...methods} />;
};
