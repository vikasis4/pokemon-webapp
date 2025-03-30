export default function LoaderSkeleton() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8 p-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-sm w-[300px] p-4 rounded-2xl shadow-lg"
          >
            <div className="h-6 bg-gray-600 rounded w-3/4 mb-4 animate-pulse"></div>
  
            <div className="h-32 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
  
            <div className="h-4 bg-gray-600 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-600 rounded w-5/6 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-600 rounded w-3/4 animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  }
  