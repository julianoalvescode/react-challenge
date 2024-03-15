import { PokemonListUseCase } from "@/domains/usecases";
import { ListPokemons } from "@/factory/PokemonList";
import { useQuery } from "@tanstack/react-query";

export function useListPokemons(params?: PokemonListUseCase.Params) {
  const {
    data: pokemons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["list-pokemons"],
    queryFn: async () => {
      return await new ListPokemons().execute(params);
    },
  });

  return {
    pokemons,
    isLoading,
    isError,
  };
}
