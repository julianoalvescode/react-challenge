import { Pokemon } from "@/domains/models";

export namespace PokemonUseCase {
  export type Params = {
    name: string;
  };
  export type Model = Pokemon;
}
