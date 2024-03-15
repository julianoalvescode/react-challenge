import { PokemonUseCase } from "@/domains/usecases";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { capitalizeFirstLetter, parseName } from "@/shared/utils/parse-name";
import { Badge } from "../ui/badge";
import React from "react";
import { getRandomBgColor } from "@/shared/utils/get-random-colors";

function Item(pokemon: PokemonUseCase.Model) {
  const { sprites, name, abilities } = pokemon;

  return (
    <>
      <div className="flex items-center p-2 bg-white rounded-lg hover:bg-gray-100">
        <div className="bg-gray-200 rounded-full">
          <Avatar>
            <AvatarImage src={sprites?.front_default} />
            <AvatarFallback className={`${getRandomBgColor()} text-white`}>
              {parseName(name)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="ml-4">
          <p className="text-sm font-semibold text-gray-700">
            {capitalizeFirstLetter(name)}
          </p>
          <div className="flex mt-2 gap-2">
            {abilities?.map((ability) => (
              <>
                <Badge key={ability?.ability?.name} variant="secondary">
                  {ability.ability.name}
                </Badge>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const PokemonItem = React.memo(Item);
