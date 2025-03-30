import { useRouter, useSearchParams } from "next/navigation";

const usePagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const limit = Number(searchParams.get("limit")) || 8;
  const page = Number(searchParams.get("page")) || 1;
  const query = String(searchParams.get("query")) || "";
  const totalPages = Number(searchParams.get("totalPages")) || 1;

  function updateParams(field: string, value: string|number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(field, value.toString());
    router.replace(`?${params.toString()}`, { scroll: false });
  }
  return {
    limit,
    page,
    query,
    totalPages,
    updateParams,
  };
};

export default usePagination;
