import { RegistrationResult, Status } from '@/shared/types'

const REGISTRATION_STATUS_MESSAGE: Record<Status, RegistrationResult> = {
  success: {
    status: 'success',
    title: 'Sucesso',
    message: 'Login efetuado com sucesso.',
  },
  error: {
    status: 'error',
    title: 'Ooops...',
    message: 'Erro ao efetuar login',
  },
}

export { REGISTRATION_STATUS_MESSAGE }
