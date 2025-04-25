import { Button } from '@heroui/react'
import { useNavigate } from 'react-router'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleGoBack = () => navigate(-1)

  return (
    <main className="flex h-screen w-full items-center justify-center bg-zinc-900">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-600">404</p>
        <h1 className="text-5xl">Página não encontrada</h1>
        <p>
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onPress={handleGoBack} color="primary">
            Voltar para a página anterior
          </Button>
        </div>
      </div>
    </main>
  )
}

export { NotFoundPage }
