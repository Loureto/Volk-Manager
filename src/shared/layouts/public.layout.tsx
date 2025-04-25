import { Outlet } from 'react-router'

const PublicLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background dark">
      <Outlet />
    </div>
  )
}

export { PublicLayout }
