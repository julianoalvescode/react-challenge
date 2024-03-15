import { Pokemon } from "@/factory/Pokemon";
import { useQuery } from "@tanstack/react-query";

export function useGetPokemon({ name }: { name?: string | undefined }) {
  const {
    data: pokemon,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`pokemon-${name}`, name],
    queryFn: async () => {
      if (!name) return;
      return await new Pokemon().execute({ name });
    },
    enabled: !!name,
  });

  return {
    pokemon,
    isLoading,
    isError,
  };
}
