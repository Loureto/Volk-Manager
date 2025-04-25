import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

export const PublicLayout = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')

  useEffect(() => {
    if (token) {
      navigate('/authenticated', { replace: true })
    }
  }, [navigate, token])

  return (
    <div
      className={
        'flex h-screen w-full flex-col items-center justify-center bg-background dark'
      }
    >
      <Outlet />
    </div>
  )
}
