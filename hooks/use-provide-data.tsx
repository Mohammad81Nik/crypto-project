"use client";
import { useQuery, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { fetchData } from "@/axios/axios";
import { IRawData, type ICryptoItem, type ITable } from "@/types/types";

const useProvideData = ({ page, debouncedSearchParam }: { page: number, debouncedSearchParam: string }) => {
  const { data, isPending, isError, error, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ["crypto-price-list", page, debouncedSearchParam],
      queryFn: () => fetchData<IRawData>(page, debouncedSearchParam),
      placeholderData: keepPreviousData,
    });


    return {data, isPending, isError, error, isFetching, isPlaceholderData}
};

export default useProvideData;
