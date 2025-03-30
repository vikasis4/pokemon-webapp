"use client";

import React from "react";
import CardBox from "@/packages/card/Card";
import { useQuery } from "@tanstack/react-query";
import { getAllPokemons } from "../api/homeApi";
import usePagination from "@/hooks/usePagination";
import useTrie from "../hooks/useTrieHook";

function PokemonSection() {
  const { page, updateParams, limit, totalPages } = usePagination();
  const [searchQuery, setSearchQuery] = React.useState<[] | string[]>([]);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["allPokemons", limit, page, searchQuery],
    queryFn: getAllPokemons,
  });

  useTrie(data?.names || [], setSearchQuery);

  React.useEffect(() => {
    if (!data || totalPages == data.totalPages) return;
    updateParams("totalPages", data.totalPages);
  }, [data]);

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <section className="flex justify-center w-[90%] mt-12 items-center gap-8 flex-wrap">
      {data.pokemons.map((pokemon, index) => (
        <CardBox key={index} {...pokemon} />
      ))}
    </section>
  );
}

export default PokemonSection;
