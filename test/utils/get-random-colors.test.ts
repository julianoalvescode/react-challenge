import { describe, it, expect } from "vitest";
import { getRandomBgColor } from "./../../src/shared/utils/get-random-colors";

describe("getRandomBgColor", () => {
  it("should return valid color", () => {
    const validColors = [
      "bg-rose-600",
      "bg-green-500",
      "bg-blue-700",
      "bg-amber-400",
    ];
    const color = getRandomBgColor();
    expect(validColors).toContain(color);
  });
});
