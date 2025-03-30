export type PokemonResult = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
};

type Ability = {
  name: string;
  url: string;
};

type PokemonAbility = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
};

type Cries = {
  latest: string;
  legacy: string;
};

type Form = {
  name: string;
  url: string;
};

type Version = {
  name: string;
  url: string;
};

type GameIndex = {
  game_index: number;
  version: Version;
};

type Item = {
  name: string;
  url: string;
};

type VersionDetail = {
  rarity: number;
  version: Version;
};

type HeldItem = {
  item: Item;
  version_details: VersionDetail[];
};

type MoveLearnMethod = {
  name: string;
  url: string;
};

type VersionGroup = {
  name: string;
  url: string;
};

type Move = {
  name: string;
  url: string;
};

type PokemonMove = {
  move: Move;
};

type Species = {
  name: string;
  url: string;
};

type Sprites = Sprite & {
  other: {
    "official-artwork": { front_default: string };
  };
};

type type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type SinglePokemonType = {
  id: number;
  name: string;
  base_experience: number;
  moves: PokemonMove[];
  species: Species;
  stats: stat[];
  abilities: PokemonAbility[];
  types: type[];
  height: number;
  weight: number;
  sprites: Sprites;
};

export type FormattedPokemonType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  species: Species;
  moves: string[];
  abilities: string[];
  types: string[];
  stats: [string, number][];
  image: string;
};
