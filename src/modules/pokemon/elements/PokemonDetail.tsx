"use client";

import { FormattedPokemonType } from "@/modules/home/types/home";
import Image from "next/image";
import { FaWeightHanging, FaRulerVertical, FaArrowLeft } from "react-icons/fa";
import { GiStarProminences } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PokemonDetails({
  pokemon,
}: {
  pokemon: FormattedPokemonType;
}) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-center items-center min-h-screen p-4"
    >
      <motion.div
        className="max-w-5xl w-full p-6 relative bg-white/20 backdrop-blur-sm rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {/* Back Button */}
        <motion.button
          className="absolute cursor-pointer top-4 left-4 text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition"
          onClick={() => router.back()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowLeft size={18} />
        </motion.button>

        {/* Pokémon Name */}
        <motion.h1
          className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {pokemon.name.toUpperCase()}
        </motion.h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {/* Pokémon Image */}
          <motion.div
            className="bg-white/10 backdrop-blur-xs border border-white/20 p-6 rounded-xl flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={300}
              height={300}
              className="rounded-xl max-w-xs sm:max-w-sm"
            />
          </motion.div>

          {/* Basic Details */}
          <motion.div
            className="bg-white/10 backdrop-blur-xs border border-white/20 p-6 rounded-xl text-white space-y-4"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold text-center">Basic Info</h2>
            <div className="flex items-center gap-2">
              <FaRulerVertical className="text-yellow-400" size={20} />
              <span>Height: {pokemon.height}m</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWeightHanging className="text-blue-400" size={20} />
              <span>Weight: {pokemon.weight}kg</span>
            </div>
            <div className="flex items-center gap-2">
              <GiStarProminences className="text-red-400" size={20} />
              <span>Base Experience: {pokemon.base_experience}</span>
            </div>
          </motion.div>

          {/* Stats Section (Full Width on Mobile) */}
          <motion.div
            className="bg-white/10 backdrop-blur-xs border border-white/20 p-6 rounded-xl text-white sm:col-span-2 md:col-span-2"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Stats</h2>
            <table className="w-full">
              <tbody>
                {pokemon.stats.map(([stat, value], index) => (
                  <tr key={index}>
                    <td className="font-medium capitalize pr-4">{stat}</td>
                    <td className="w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <motion.div
                            className="bg-green-400 h-3 rounded-full"
                            style={{ width: `${(value / 200) * 100}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(value / 200) * 100}%` }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          ></motion.div>
                        </div>
                        <span className="text-sm font-bold">{value}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Moves Section (Full Width) */}
          <motion.div
            className="col-span-1 sm:col-span-2 md:col-span-4 bg-white/10 backdrop-blur-xs border border-white/20 p-6 rounded-xl text-white"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Moves</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {pokemon.moves.slice(0, 8).map((move, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-3 rounded-lg text-center font-medium capitalize text-white shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {move}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
