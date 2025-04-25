import { RouteObject } from 'react-router'
import { LoginPage } from '../pages'

export const authRoutes: RouteObject[] = [
  {
    index: true,
    Component: LoginPage,
  },
  {
    path: 'recuperar-senha',
    children: [
      {
        index: true,
        Component: () => <p className="text-center">Recuperar senha</p>,
      },
      {
        path: 'confirmar',
        Component: () => <p className="text-center">Confirmar senha</p>,
      },
    ],
  },
]
