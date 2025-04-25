import { Button, Input } from '@heroui/react'
import { PlusIcon, SearchIcon, Trash2Icon } from 'lucide-react'

export const UserHeader = () => {
  return (
    <section className="mb-6 flex items-center justify-between gap-4 dark">
      <Input
        startContent={<SearchIcon className="text-zinc-400" />}
        className="max-w-[400px]"
        placeholder="Pesquisar..."
      />
      <div className="flex gap-4">
        <Button color="primary" isDisabled>
          Deletar
          <Trash2Icon className="size-5" />
        </Button>
        <Button color="primary">
          Adicionar
          <PlusIcon className="size-5" />
        </Button>
      </div>
    </section>
  )
}
