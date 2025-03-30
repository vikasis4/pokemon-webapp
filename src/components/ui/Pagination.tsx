"use client";

import usePagination from "@/hooks/usePagination";
import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface PaginationProps {
  totalPages?: number;
  siblingCount?: number;
}

export default function Pagination({ siblingCount = 1 }: PaginationProps) {
  const { page, totalPages, updateParams } = usePagination();
  const [currentPage, setCurrentPage] = useState<number>(page);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      updateParams("page", page);
    }
  };

  const getPaginationRange = (): (number | string)[] => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPages - 1
      );

      const range: (number | string)[] = [1];

      if (leftSiblingIndex > 2) range.push("...");

      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) range.push(i);

      if (rightSiblingIndex < totalPages - 1) range.push("...");

      range.push(totalPages);
      return range;
    }

    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  return (
    <main className="flex justify-between items-center w-[80%] mx-auto my-12">
      <ItemsPerPage />
      <section className="flex items-center justify-center space-x-2">
        <button
          className="px-3 py-1 rounded-md bg-gray-800 text-white "
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaLongArrowAltLeft size={30} />
        </button>

        {getPaginationRange().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-2 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => goToPage(page as number)}
              className={`px-3 font-mono text-lg py-1 rounded-md ${
                page === currentPage
                  ? "bg-black border border-white/40 text-white/80"
                  : "bg-white text-black/80 hover:bg-gray-700"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          className="px-3 py-1 rounded-md bg-gray-800 text-white disabled:opacity-50"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaLongArrowAltRight size={30} />
        </button>
      </section>
    </main>
  );
}

function ItemsPerPage() {
  const { limit, updateParams } = usePagination();

  const [itemsPerPage, setItemsPerPage] = useState<number>(limit);
  const options = [8, 16, 24];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    setItemsPerPage(value);
    updateParams("limit", value);
  };

  return (
    <div className="flex items-center font-mono text-lg space-x-2">
      <span className="text-white">Items per page:</span>
      <select
        value={itemsPerPage}
        onChange={handleChange}
        className="bg-gray-800 text-white px-3 py-1 rounded-md focus:ring focus:ring-purple-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
