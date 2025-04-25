import { Outlet } from 'react-router'

const PublicLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-950 dark">
      <Outlet />
    </div>
  )
}

export { PublicLayout }
