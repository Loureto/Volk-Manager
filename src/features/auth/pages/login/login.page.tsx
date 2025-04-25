import { useLoginModel } from './login.model'
import { LoginView } from './login.view'

const LoginPage = () => {
  return <LoginView {...useLoginModel()} />
}

export { LoginPage }
