"use client";
import { useQuery, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { fetchData } from "@/axios/axios";
import { type ICryptoItem, type ITable } from "@/types/types";

const useProvideData = ({ page }: { page: number }) => {
  const { data, isPending, isError, error, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ["crypto-price-list", page],
      queryFn: () => fetchData<ICryptoItem>(page),
      placeholderData: keepPreviousData,
    });


    return {data, isPending, isError, error, isFetching, isPlaceholderData}
};

export default useProvideData;
