"use client";

import BgDropFilter from "@/components/ui/BgDropFilter";
import { fetchPokemonsData } from "@/modules/home/api/homeApi";
import { FormattedPokemonType } from "@/modules/home/types/home";
import PokemonDetails from "@/modules/pokemon/elements/PokemonDetail";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React from "react";
import PokemonDetailsSkeleton from "./loading";

function Page() {
  const queryClient = useQueryClient();
  const path = usePathname();
  const poekmon = path.split("/")[2];

  const cachedData = queryClient.getQueryData(["pokemon", poekmon]);

  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", poekmon],
    queryFn: () => fetchPokemonsData(poekmon),
    initialData: cachedData as FormattedPokemonType,
  });

  return (
    <BgDropFilter url="/pokemon/backgroundimg.jpg">
      {isLoading ? (
        <PokemonDetailsSkeleton />
      ) : (
        <PokemonDetails pokemon={data} />
      )}
    </BgDropFilter>
  );
}

export default Page;
