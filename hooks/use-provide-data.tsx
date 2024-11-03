"use client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchData } from "@/axios/axios";
import { type ICryptoItem, type ITable } from "@/types/types";
import ToTransactionButton from "@/components/ui/ToTransactionButton";

const useProvideData = ({ page }: { page: number }) => {
  const { data, isError, isPending, error, isPlaceholderData, isFetching } =
    useQuery({
      queryKey: ["crypto-price-list", page],
      queryFn: () => fetchData<ICryptoItem>(page),
    });

  const tableData = useMemo(() => {
    if (data) {
      const cryptoTableData: ITable[] = data.map((item) => {
        return {
          name: {
            fa: item.fa_name,
            en: item.currency_code,
            icon: item.icon,
          },
          price: item.price,
          daily_change_percent: item.daily_change_percent,
          buy_irt_price: item.buy_irt_price,
          sell_irt_price: item.sell_irt_price,
          cta: <ToTransactionButton isUsedInAccordian={false} />,
        };
      });

      return cryptoTableData;
    } else {
      return [];
    }
  }, [data]);

  return tableData;
};

export default useProvideData;
