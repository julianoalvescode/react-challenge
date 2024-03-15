import { useGetPokemon } from "@/presentation/hooks/useGetPokemon";
import { PokemonItem } from "..";

import { PokemonProfileProps } from "./types";

export function PokemonProfile({ search, pokemon }: PokemonProfileProps) {
  const { pokemon: pokemonSearch } = useGetPokemon({ name: search });

  if (pokemon) {
    return <PokemonItem {...pokemon} />;
  }

  if (pokemonSearch) {
    return <PokemonItem {...pokemonSearch} />;
  }
}
