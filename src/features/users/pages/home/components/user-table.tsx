import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react'

export const UserTable = ({ users }: { users: any[] }) => {
  return (
    <Table
      className="h-full dark"
      color="default"
      selectionMode="multiple"
      removeWrapper
    >
      <TableHeader>
        <TableColumn>NOME</TableColumn>
        <TableColumn>E-MAIL</TableColumn>
        <TableColumn>CPF</TableColumn>
        <TableColumn>DATA DE NASCIMENTO</TableColumn>
        <TableColumn>TELEFONE</TableColumn>
      </TableHeader>
      <TableBody>
        {users &&
          users?.map((user: any) => (
            <TableRow key={user.id} className="text-white">
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.cpf || '-'}</TableCell>
              <TableCell>{user.birthDate || '-'}</TableCell>
              <TableCell>{user.phone || '-'}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
