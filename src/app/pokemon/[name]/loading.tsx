const PokemonDetailsSkeleton = () => {
  return (
    <div className="flex justify-center items-center  min-h-screen p-4">
      <div className="max-w-5xl w-full p-6 relative bg-white/20 backdrop-blur-sm rounded-xl shadow-xl">
        {/* Back Button */}
        <div className="absolute top-4 left-4 bg-gray-700/50 animate-pulse w-10 h-10 rounded-full"></div>

        {/* Pokémon Name */}
        <div className="w-48 h-10 bg-gray-700/50 animate-pulse mx-auto rounded-lg mb-6"></div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {/* Pokémon Image */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/20 p-6 rounded-xl flex justify-center items-center">
            <div className="w-48 h-48 bg-gray-700/50 animate-pulse rounded-lg"></div>
          </div>

          {/* Basic Details */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/20 p-6 rounded-xl text-white space-y-4">
            <div className="w-32 h-6 bg-gray-700/50 animate-pulse mx-auto rounded-lg"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-700/50 animate-pulse rounded-full"></div>
              <div className="w-24 h-4 bg-gray-700/50 animate-pulse rounded-lg"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-700/50 animate-pulse rounded-full"></div>
              <div className="w-24 h-4 bg-gray-700/50 animate-pulse rounded-lg"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-700/50 animate-pulse rounded-full"></div>
              <div className="w-24 h-4 bg-gray-700/50 animate-pulse rounded-lg"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/20 p-6 rounded-xl text-white sm:col-span-2 md:col-span-2">
            <div className="w-32 h-6 bg-gray-700/50 animate-pulse mx-auto rounded-lg mb-4"></div>
            <table className="w-full">
              <tbody className="flex flex-col gap-2">
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <tr key={index}>
                      <td className="pr-4">
                        <div className="w-24 h-4 bg-gray-700/50 animate-pulse rounded-lg"></div>
                      </td>
                      <td className="w-full">
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div className="bg-gray-600 animate-pulse h-3 rounded-full w-2/3"></div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Moves Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 bg-white/10 backdrop-blur-xs border border-white/20 p-6 rounded-xl text-white">
            <div className="w-32 h-6 bg-gray-700/50 animate-pulse mx-auto rounded-lg mb-4"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Array(8)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 animate-pulse p-3 rounded-lg w-24 h-6 mx-auto"
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsSkeleton;
