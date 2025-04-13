import { HomeView, useHomeViewModel } from "@/modules/users/presentation";
import { makeGetUsersUsecase } from "../usecases";

export const HomeViewFactory = () => {
  const methods = useHomeViewModel({ showUsers: makeGetUsersUsecase() });
  return <HomeView {...methods} />;
};
