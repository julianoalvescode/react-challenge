import { PokemonUseCase } from "@/domains/usecases";

export type PokemonProfileProps = {
  search?: string;
  pokemon?: PokemonUseCase.Model;
};
