import { renderHook, waitFor } from "@testing-library/react";
import { it, expect } from "vitest";

import { useGetPokemon } from "../../src/presentation/hooks/useGetPokemon";
import { createWrapper } from "../../src/lib/wrapper-test";

it("should return pokemon", async () => {
  const { result } = renderHook(() => useGetPokemon({ name: "pikachu" }), {
    wrapper: createWrapper(),
  });

  await waitFor(() => {
    expect(result.current.pokemon.name).toBeDefined();
  });
});
