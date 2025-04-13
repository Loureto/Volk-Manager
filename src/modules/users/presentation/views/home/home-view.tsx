import { useHomeViewModel } from "./home-viewmodel";

export const HomeView = (methods: ReturnType<typeof useHomeViewModel>) => {
  const { data } = methods;

  return <h1>{JSON.stringify(data)}</h1>;
};
