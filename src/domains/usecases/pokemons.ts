export namespace PokemonListUseCase {
  export type Params = {
    offset?: number;
    limit?: number;
  };
  export type Model = {
    count: number;
    next: string;
    previous: number;
    results: {
      name: string;
      url: string;
    }[];
  };
}
