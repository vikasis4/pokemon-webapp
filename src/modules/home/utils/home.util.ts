import { SinglePokemonType } from "../types/home";

const truncate = (txt: string) =>
  txt === "special-defense"
    ? "spl-def"
    : txt === "special-attack"
    ? "spl-atk"
    : txt;
export const formatPokemonData = (pokemon: SinglePokemonType) => {
  const {
    id,
    name,
    base_experience,
    moves,
    species,
    stats,
    abilities,
    types,
    height,
    weight,
    sprites,
  } = pokemon;
  return {
    id,
    name,
    height,
    weight,
    base_experience,
    species,
    moves: moves.map((move) => move.move.name),
    abilities: abilities.map((ability) => ability.ability.name),
    types: types.map((type) => type.type.name),
    stats: stats.map(
      (stat) => [truncate(stat.stat.name), stat.base_stat] as [string, number]
    ),
    image: sprites.other["official-artwork"]?.front_default || "/home/noimg.webp",
  };
};
