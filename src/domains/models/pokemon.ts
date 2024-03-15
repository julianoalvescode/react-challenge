export type Pokemon = {
  weight: number;
  height: number;
  id: number;
  base_experience: number;
  is_default: boolean;
  name: string;
  order: number;
  abilities: Abilities[];
  sprites: {
    front_default: string;
  };
};

type Abilities = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
