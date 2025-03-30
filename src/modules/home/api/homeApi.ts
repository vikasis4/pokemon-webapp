import { PokemonResponse } from "../types/home";
import { formatPokemonData } from "../utils/home.util";

export const getAllPokemons = async ({
  queryKey,
}: {
  queryKey: [string, number, number, string[]?];
}) => {
  const [, limit, page, search = []] = queryKey;

  const isSearched = !!search.length;

  const response: PokemonResponse = isSearched
    ? null
    : await fetch(
        process.env.NEXT_PUBLIC_BASE_API + "pokemon?limit=100000"
      ).then((res) => res.json());

  const start = (page - 1) * limit;
  const end = page * limit;

  const names = isSearched ? search : response.results.map((res) => res.name);

  const pokemons = await Promise.all(
    names.slice(start, end).map(async (name) => await fetchPokemonsData(name))
  );

  const count = isSearched ? search.length : response.count;
  
  const finaldata = {
    count,
    pokemons,
    names,
    totalPages: Math.ceil(count / limit),
  };
  return finaldata;
};

const fetchPokemonsData = async (name: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_API + `pokemon/${name}`
  );
  const data = await response.json();
  return formatPokemonData(data);
};
