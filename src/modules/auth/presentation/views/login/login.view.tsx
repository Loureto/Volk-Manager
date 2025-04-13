import { Button, Input } from "@heroui/react";
import { useLoginViewModel } from "./login.viewmodel";
import { Controller } from "react-hook-form";

export const LoginView = (methods: ReturnType<typeof useLoginViewModel>) => {
  const { control, loading, handleSubmit, handleSubmitForm } = methods;

  return (
    <div className="flex w-full max-w-[496px] flex-col rounded-lg bg-zinc-900 px-6 py-10">
      <div className="roundend-lg mb-10 flex flex-col items-center gap-2 p-4">
        <h1 className="font-bold">VOLK MANAGER</h1>
        <p className="text-center">Faça login na sua conta para continuar</p>
      </div>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              isRequired
              type="email"
              label="E-mail"
              placeholder="Informe seu e-mail"
              errorMessage={error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              isRequired
              type="password"
              label="Senha"
              placeholder="Insira sua senha"
              errorMessage={error?.message}
              {...field}
            />
          )}
        />

        <Button color="primary" size="lg" type="submit" isLoading={loading}>
          Entrar
        </Button>
      </form>
    </div>
  );
};
