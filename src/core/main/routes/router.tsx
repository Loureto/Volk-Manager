import { PrivateLayout, PublicLayout } from "@/core/presentation";
import { authRoutes } from "@/modules/auth/main/routes";
import { userRoutes } from "@/modules/users";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: authRoutes,
  },
  {
    path: "/authenticated",
    Component: PrivateLayout,
    children: userRoutes,
  },
  {
    path: "*",
    Component: () => <p className="text-zinc-900">Página não encontrada.</p>,
  },
]);
