import React from "react";
import { describe, it, expect, vi, beforeEach, beforeAll } from "vitest";
import { render, screen, renderHook, waitFor } from "@testing-library/react";
import { PokemonList } from "././../../src/components/pokemon-list";
import { useListPokemons } from "../../src/presentation/hooks/useListPokemons";
import { createWrapper } from "../../src/lib/wrapper-test";

// Mock dos hooks personalizados
vi.mock("@/presentation/hooks/useListPokemons", () => ({
  useListPokemons: () => ({
    pokemons: {
      results: [
        { name: "Bulbasaur" },
        { name: "Charmander" },
        { name: "Squirtle" },
      ],
    },
  }),
}));

vi.mock("@/presentation/hooks/useRoveFocus", () => ({
  useRoveFocus: vi.fn().mockReturnValue([0, vi.fn()]),
}));

describe("PokemonList", async () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  beforeAll(() => {
    renderHook(() => useListPokemons(), {
      wrapper: createWrapper(),
    });
  });

  it("não renderiza quando isVisible é false", () => {
    render(<PokemonList isVisible={false} />, {
      wrapper: createWrapper(),
    });
    expect(screen.queryByRole("list")).not.toBeUndefined();
  });

  it("renderiza corretamente quando isVisible é true", async () => {
    await waitFor(() => {
      const { getByRole } = render(<PokemonList isVisible={true} />, {
        wrapper: createWrapper(),
      });
      expect(getByRole("list")).toBeDefined();
    });
  });
});
