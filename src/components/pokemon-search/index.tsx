import { PokemonSearchController } from "./controller";
import { PokemonProfile } from "../pokemon-profile/pokemon-wrapper";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Search } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import { PokemonList } from "../pokemon-list";

export function PokemonSearch() {
  const { form, onSubmit, search } = PokemonSearchController();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "/") {
      event.preventDefault();
      searchInputRef.current?.focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="p-4 mb-4 flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Search
                      placeholder="Search pokemon..."
                      {...field}
                      value={field.value ?? ""}
                      ref={searchInputRef}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        {search && <PokemonProfile search={search} />}

        <PokemonList isVisible={!search} />
      </div>
    </>
  );
}
