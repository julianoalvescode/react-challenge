import { describe, it, expect } from "vitest";
import {
  parseName,
  capitalizeFirstLetter,
} from "./../../src/shared/utils/parse-name";

describe("parseName function", () => {
  it('returns "P" if name is not provided or empty', () => {
    expect(parseName()).toBe("P");
    expect(parseName("")).toBe("P");
  });

  it("returns initials if name has two or more parts", () => {
    expect(parseName("John Doe")).toBe("JD");
    expect(parseName("Jane Smith")).toBe("JS");
  });

  it("returns the first letter of the name if it only has one part", () => {
    expect(parseName("John")).toBe("J");
    expect(parseName("Jane")).toBe("J");
  });
});

describe("capitalizeFirstLetter function", () => {
  it("returns an empty string if input is empty", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("does not change the string if the first character is already uppercase", () => {
    expect(capitalizeFirstLetter("John")).toBe("John");
  });

  it("capitalizes the first letter if it is lowercase", () => {
    expect(capitalizeFirstLetter("john")).toBe("John");
  });

  it("does not change the string if it starts with a non-letter character", () => {
    expect(capitalizeFirstLetter("1john")).toBe("1john");
  });
});
