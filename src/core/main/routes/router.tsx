import { createBrowserRouter } from 'react-router'
import { PrivateLayout } from '@/shared/layouts'
import { PublicLayout } from '@/core/presentation'

import { authRoutes } from '@/features/auth'
import { userRoutes } from '@/features/users'
import { NotFoundPage } from '@/features/not-found'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: authRoutes,
  },
  {
    path: '/authenticated',
    Component: PrivateLayout,
    children: userRoutes,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
])
