import { api } from '@/shared/services'
import { SchemaLoginType } from '../validations'
import { HttpStatusCode } from '@/core'

const loginService = async (data: SchemaLoginType) => {
  const response = await api.post('/auth/v1/token?grant_type=password', data)

  if (response.status === HttpStatusCode.ok) {
    localStorage.setItem('accessToken', response.data.access_token)
  }

  return response
}

export { loginService }
