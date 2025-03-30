import Badge from "@/components/ui/Badge";
import { FormattedPokemonType } from "@/modules/home/types/home";
import Image from "next/image";
import React from "react";

function CardBox(props: FormattedPokemonType) {
  return (
    <main className="bg-white/20 border border-white/20 cursor-pointer hover:bg-white/30 hover:shadow-2xl hover:scale-[103%] duration-300 backdrop-blur-sm p-4 shadow-lg shadow-white/20 rounded-lg">
      <section className="flex justify-between items-center gap-2">
        <p className="text-2xl text-center text-white/80 font-mono truncate">
          {props.name}
        </p>
        <Badge label="Invisible" count={props.abilities.length} />
      </section>
      <Image
        src={props.image}
        height={200}
        width={200}
        alt="pokemon image"
        className="mx-auto"
      />
      <section className="text-sm grid gap-2 grid-cols-2 grid-rows-2 font-mono ">
        {props.stats.map((stat) => (
          <div
            key={stat[0]}
            className="text-center bg-black/10 text-white/80 backdrop-blur-xs py-1 px-2 rounded-md"
          >
            {stat[0]}: {stat[1]}
          </div>
        ))}
      </section>
    </main>
  );
}

export default CardBox;
