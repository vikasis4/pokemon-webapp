"use client";

import React from "react";
import { motion } from "framer-motion";
import CardBox from "@/packages/card/Card";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPokemons } from "../api/homeApi";
import usePagination from "@/hooks/usePagination";
import useTrie from "../hooks/useTrieHook";
import ErrorPage from "@/app/error";
import LoaderSkeleton from "@/components/ui/LoaderSkeleton";

function PokemonSection() {
  const { page, updateParams, limit, totalPages } = usePagination();
  const [searchQuery, setSearchQuery] = React.useState<[] | string[]>([]);
  const queryClient = useQueryClient();

  const { isPending, isError, data } = useQuery({
    queryKey: ["allPokemons", limit, page, searchQuery],
    queryFn: getAllPokemons,
  });

  useTrie(data?.names || [], setSearchQuery);

  React.useEffect(() => {
    if (!data || totalPages == data.totalPages) return;
    updateParams("totalPages", data.totalPages);
  }, [data]);

  React.useEffect(() => {
    if (isPending || !data) return;
    data.pokemons.forEach((pokemon) => {
      queryClient.setQueryData(["pokemon", pokemon.name], pokemon);
    });
  }, [data, isPending, queryClient]);

  if (isPending) return <LoaderSkeleton />;
  if (isError) return <ErrorPage />;

  return (
    <motion.section
      key={page}
      className="flex justify-center w-[90%] mt-12 items-center gap-8 flex-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {data.pokemons.map((pokemon, index) => (
        <motion.div
          key={pokemon.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <CardBox {...pokemon} />
        </motion.div>
      ))}
    </motion.section>
  );
}

export default PokemonSection;
