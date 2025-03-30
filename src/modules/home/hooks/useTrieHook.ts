import React from "react";
import Trie, { TrieType } from "@/utils/trie";
import usePagination from "@/hooks/usePagination";

const useTrie = (
  names: string[],
  setSearchQuery: (query: string[]) => void
) => {
  const search = React.useRef<null | TrieType>(null);
  const { query, updateParams } = usePagination();

  React.useEffect(() => {
    if (search.current) return;
    search.current = new Trie();
    names.forEach((name) => search.current!.insert(name));
  }, [names]);

  React.useEffect(() => {
    if (!search.current) return;
    if (query == "") {
      setSearchQuery([]);
      return;
    }
    const results = search.current!.searchPrefix(query.toString());
    setSearchQuery(results);
    updateParams("page", 1);
  }, [query]);
};

export default useTrie;
