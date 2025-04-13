import { IGetUserUsecase } from "@/modules/users/domain";
import { useQuery } from "@tanstack/react-query";

type Props = {
  showUsers: IGetUserUsecase;
};

export const useHomeViewModel = ({ showUsers }: Props) => {
  const query = useQuery({
    queryKey: ["list-users"],
    queryFn: () => showUsers.execute(),
  });

  return { ...query };
};
