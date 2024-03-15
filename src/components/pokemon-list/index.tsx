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

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    index: number
  ): void => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % (pokemons?.results?.length || 0);
      setFocusedIndex(nextIndex);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex =
        (index - 1 + (pokemons?.results?.length || 0)) %
        (pokemons?.results?.length || 0);
      setFocusedIndex(prevIndex);
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
