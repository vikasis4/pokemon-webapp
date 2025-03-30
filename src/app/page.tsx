import BgDropFilter from "@/components/ui/BgDropFilter";
import Pagination from "@/components/ui/Pagination";
import { getAllPokemons } from "@/modules/home/api/homeApi";
import HeroSection from "@/modules/home/elements/HeroSection";
import PokemonSection from "@/modules/home/elements/PokemonSection";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const url = new URL(
    headersList.get("referer") || (process.env.NEXT_PUBLIC_BASE_API as string)
  );
  const limit = Number(url.searchParams.get("limit")) || 8;
  const page = Number(url.searchParams.get("page")) || 1;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["allPokemons", limit, page, []],
    queryFn: getAllPokemons,
  });

  return (
    <BgDropFilter url="/home/hero.jpeg">
      <div className="relative overflow-scoll flex-col z-10 mt-12 flex h-full items-center justify-center text-white text-4xl font-bold scrollbar-hide">
        <HeroSection />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <PokemonSection />
        </HydrationBoundary>
        <Pagination />
      </div>
    </BgDropFilter>
  );
}
