import { PokemonUseCase } from "@/domains/usecases";
import http from "@/shared/http";
import { endpoints } from "@/shared/config/http-services";

interface IPokemon {
  execute(params?: PokemonUseCase.Params): Promise<PokemonUseCase.Model>;
}

export class Pokemon implements IPokemon {
  async execute({
    name,
  }: PokemonUseCase.Params): Promise<PokemonUseCase.Model> {
    try {
      const { status, data } = await http.get(
        `${endpoints.SRV_POKEMON}/${name}`
      );

      if (status === 200 && data) {
        return data;
      }

      throw new Error("Error get pokemon");
    } catch (err) {
      throw new Error("Error get pokemon");
    }
  }
}
