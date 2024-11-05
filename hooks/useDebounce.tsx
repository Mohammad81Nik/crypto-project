import { useEffect, useState } from "react";

const useDebounce = (searchParam: string, delay: number) => {
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');

  useEffect(() => {
    const identifier = setTimeout(() => {
      setDebouncedSearch(searchParam);
    }, delay);

    return () => {
      clearTimeout(identifier);
    };
  });
  return debouncedSearch;
};

export default useDebounce;
