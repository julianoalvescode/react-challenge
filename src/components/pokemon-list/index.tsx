import { PokemonProfile } from "@/components/pokemon-profile/pokemon-wrapper";
import { useListPokemons } from "@/presentation/hooks/useListPokemons";
import { PokemonListProps } from "./types";
import { useRoveFocus } from "@/presentation/hooks/useRoveFocus";

export function PokemonList({ isVisible }: PokemonListProps) {
  const { pokemons } = useListPokemons();
  const [focusedIndex, setFocusedIndex] = useRoveFocus(
    pokemons?.results?.length || 0
  );

  if (!isVisible) return <></>;

  // Definição da função handleKeyDown que manipula eventos de teclado em um item da lista
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>, // O evento de teclado recebido, juntamente com o tipo do elemento alvo
    index: number // O índice atual do item da lista que está focado ou selecionado
  ): void => {
    if (e.key === "ArrowDown") {
      // Verifica se a tecla pressionada foi a seta para baixo
      e.preventDefault(); // Previne o comportamento padrão do navegador para este evento de teclado
      // Calcula o próximo índice de forma circular. Se for o último item, volta para o primeiro
      const nextIndex = (index + 1) % (pokemons?.results?.length || 0);
      setFocusedIndex(nextIndex); // Atualiza o índice do item focado para o próximo índice calculado
    } else if (e.key === "ArrowUp") {
      // Verifica se a tecla pressionada foi a seta para cima
      e.preventDefault(); // Previne o comportamento padrão do navegador para este evento de teclado
      // Calcula o índice anterior de forma circular. Se for o primeiro item, vai para o último
      const prevIndex =
        (index - 1 + (pokemons?.results?.length || 0)) %
        (pokemons?.results?.length || 0);
      setFocusedIndex(prevIndex); // Atualiza o índice do item focado para o índice anterior calculado
    }
  };

  return (
    <>
      <ul role="list">
        {pokemons?.results?.map((pokemon, i) => (
          <li
            key={pokemon.name}
            tabIndex={focusedIndex === i ? 1 : -1}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onFocus={() => setFocusedIndex(i)}
            className={`${
              focusedIndex === i
                ? "border border-grey-500 rounded-lg"
                : "bg-white"
            } focus:outline-none focus:bg-gray-100`}
            onMouseEnter={() => setFocusedIndex(i)}
          >
            <PokemonProfile search={pokemon?.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
