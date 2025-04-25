import { UserFooter, UserHeader, UserTable } from './components'

export const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="mb-10 text-3xl font-bold text-white">Clientes</h1>
      <UserHeader />

      <UserTable users={[]} />

      <UserFooter />
    </div>
  )
}
