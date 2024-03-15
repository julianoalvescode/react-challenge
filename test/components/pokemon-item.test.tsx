import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PokemonItem } from "./../../src/components/pokemon-profile";

vi.mock("@/shared/utils/parse-name", () => ({
  capitalizeFirstLetter: vi.fn((str) => str.toUpperCase()),
  parseName: vi.fn((str) => str.substring(0, 2).toUpperCase()),
  getRandomBgColor: vi.fn(() => "bg-blue-500"),
}));

describe("PokemonItem", () => {
  it("should render the pokemon's name and abilities correctly", () => {
    const mockPokemon = {
      sprites: { front_default: "url-to-sprite" },
      name: "bulbasaur",
      abilities: [
        { ability: { name: "overgrow" } },
        { ability: { name: "chlorophyll" } },
      ],
    };

    render(<PokemonItem {...mockPokemon} />);

    expect(screen.getByText("Bulbasaur")).toBeDefined();

    expect(screen.getByText("overgrow")).toBeDefined();
    expect(screen.getByText("chlorophyll")).toBeDefined();
  });
});
