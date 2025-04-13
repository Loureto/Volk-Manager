export const makeApiUrl = (): string => {
  return `${import.meta.env.VITE_SUPABASE_URL}`;
};
