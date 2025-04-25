import { useLoginModel } from './login.model'
import { Container, Form, Header } from './components'

const LoginView = (methods: ReturnType<typeof useLoginModel>) => {
  const { control, isPending, onSubmit } = methods

  return (
    <Container>
      <Header />
      <Form control={control} isPending={isPending} onSubmit={onSubmit} />
    </Container>
  )
}

export { LoginView }
