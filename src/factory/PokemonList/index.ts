import { PokemonListUseCase } from "@/domains/usecases";
import http from "@/shared/http";
import { endpoints } from "@/shared/config/http-services";

interface IlistPokemons {
  execute(
    params?: PokemonListUseCase.Params
  ): Promise<PokemonListUseCase.Model>;
}

export class ListPokemons implements IlistPokemons {
  async execute(
    params?: PokemonListUseCase.Params
  ): Promise<PokemonListUseCase.Model> {
    try {
      const { status, data } = await http.get(`${endpoints.SRV_LIST_POKEMON}`, {
        params: {
          ...params,
        },
      });

      if (status === 200 && data) {
        return data;
      }

      throw new Error("Error get pokemons list");
    } catch (err) {
      throw new Error("Error get pokemons list");
    }
  }
}
