import { Button, Input } from '@heroui/react'
import { Controller } from 'react-hook-form'
import { useLoginModel } from '../login.model'
import { LogInIcon } from 'lucide-react'

type FormProps = Omit<ReturnType<typeof useLoginModel>, 'alert'>

const Form = ({ control, isPending = false, onSubmit }: FormProps) => {
  return (
    <form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
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

      <Button color="primary" size="lg" type="submit" isLoading={isPending}>
        Entrar
        <LogInIcon className="size-5 text-white" />
      </Button>
    </form>
  )
}

export { Form }
