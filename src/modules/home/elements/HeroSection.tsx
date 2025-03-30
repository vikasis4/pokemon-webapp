"use client";

import Input from "@/components/ui/Input";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <main className="flex w-full justify-center items-center flex-col gap-4">
      <Image src="/icon.png" alt="pokemon logo" height={100} width={100} />
      <section className="bg-pink-400/20 w-[90%] md:w-1/2 border border-white/30 backdrop-blur-sm rounded-md px-4 py-8">
        <h1 className="font-mono text-6xl bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent text-center">
          Pokemon Series
        </h1>
        <p className="text-lg text-white/80 text-center mt-6">
          Discover, Search, and Catch Em All! 🔍✨ Explore the world of Pokémon
          and find your favorites with ease.
        </p>
      </section>

      <Input label="Search for pokemons" />
    </main>
  );
}

export default HeroSection;
