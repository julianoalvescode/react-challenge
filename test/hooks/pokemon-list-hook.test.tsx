import { renderHook, waitFor } from "@testing-library/react";
import { it, expect } from "vitest";

import { useListPokemons } from "../../src/presentation/hooks/useListPokemons";
import { createWrapper } from "../../src/lib/wrapper-test";

it("should return the list of pokemons", async () => {
  const { result } = renderHook(() => useListPokemons(), {
    wrapper: createWrapper(),
  });

  await waitFor(() => {
    expect(result.current.pokemons).toBeDefined();
  });
});
