"use client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchData } from "@/axios/axios";
import { type ICryptoItem, type ITable } from "@/types/types";


const useProvideData = ({ page }: { page: number}) => {
  const { data, isError, isPending, error, isPlaceholderData, isFetching } =
    useQuery({
      queryKey: ["crypto-price-list", page],
      queryFn: () => fetchData<ICryptoItem>(page),
      
    });

    console.log(data)
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
          cta: (
            <button className="w-[130px] h-[47px] bg-primary-color text-white text-[14px] font-extrabold rounded-[8px]">
              معامله
            </button>
          ),
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
