import { RouteObject } from "react-router";
import { LoginViewFactory } from "../factories";

export const authRoutes: RouteObject[] = [
  {
    index: true,
    Component: LoginViewFactory,
  },
  {
    path: "recuperar-senha",
    children: [
      {
        index: true,
        Component: () => <p className="text-center">Recuperar senha</p>,
      },
      {
        path: "confirmar",
        Component: () => <p className="text-center">Confirmar senha</p>,
      },
    ],
  },
];
