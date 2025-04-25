import { Button, Pagination } from '@heroui/react'

export const UserFooter = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <p className="text-small text-gray-50">Página 1 de 10</p>
      <Pagination
        className="dark"
        color="primary"
        page={1}
        total={10}
        // onChange={setCurrentPage}
      />
      <div className="flex gap-2">
        <Button
          className="flex items-center justify-center dark"
          size="sm"
          variant="flat"
          // onPress={() =>
          //   setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
          // }
        >
          Voltar
        </Button>
        <Button
          className="flex items-center justify-center dark"
          size="sm"
          variant="flat"
          // onPress={() =>
          //   setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
          // }
        >
          Avançar
        </Button>
      </div>
    </div>
  )
}
