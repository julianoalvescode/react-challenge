import { z } from "zod";

export const formSchemaPokemonSearch = z.object({
  name: z.string().nullable(),
});
