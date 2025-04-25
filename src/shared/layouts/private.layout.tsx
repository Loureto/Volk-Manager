import { Outlet } from 'react-router'
import { Sidebar } from '../components'

const PrivateLayout = () => {
  return (
    <div className="flex h-screen w-full bg-zinc-950">
      <Sidebar />
      <main className="flex flex-1 flex-col px-10 py-5">
        <Outlet />
      </main>
    </div>
  )
}

export { PrivateLayout }
