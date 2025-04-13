import { RouteObject } from "react-router";
import { HomeViewFactory } from "../factories/views";

export const userRoutes: RouteObject[] = [
  {
    index: true,
    Component: HomeViewFactory,
  },
];
