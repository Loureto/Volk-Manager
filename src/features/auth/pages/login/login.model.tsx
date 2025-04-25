import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegistrationResult } from '@/shared/types'
import { REGISTRATION_STATUS_MESSAGE } from '../../messages'
import { loginSchema, SchemaLoginType } from '../../validations'
import { loginService } from '../../services'

const useLoginModel = () => {
  const navigate = useNavigate()
  const [alert, setAlert] = useState<RegistrationResult | null>(null)
  const { control, handleSubmit } = useForm<SchemaLoginType>({
    resolver: zodResolver(loginSchema),
  })

  const { mutate, isPending } = useMutation<any, AxiosError, SchemaLoginType>({
    mutationFn: async (data: SchemaLoginType) => await loginService(data),
    onSuccess: () => {
      navigate('/authenticated', { replace: true })
      setAlert(REGISTRATION_STATUS_MESSAGE.success)
    },
    onError: () => setAlert(REGISTRATION_STATUS_MESSAGE.error),
  })

  const onSubmit = handleSubmit((data) => mutate(data))

  return {
    alert,
    control,
    isPending,
    onSubmit,
  }
}

export { useLoginModel }
