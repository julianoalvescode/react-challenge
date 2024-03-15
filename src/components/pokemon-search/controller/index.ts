import { formSchemaPokemonSearch } from "@/shared/schemas/pokemon-search";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function PokemonSearchController() {
  const [search, setSearch] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchemaPokemonSearch>>({
    resolver: zodResolver(formSchemaPokemonSearch),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchemaPokemonSearch>) => {
    setSearch(data.name);
  };

  return {
    form,
    onSubmit,
    search,
  };
}
