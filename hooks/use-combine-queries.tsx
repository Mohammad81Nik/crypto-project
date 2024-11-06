import { useQueries } from "@tanstack/react-query";
import { fetchCryptoData, fetchChartPeriod } from "@/axios/axios";
import { ICryptoItem, IRawChartData, TChartPeriodData } from "@/types/types";

const useCombineQuereis = (currency_code: string) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["currency-description"],
        queryFn: () => {
          return fetchCryptoData<ICryptoItem>(currency_code);
        },
      },
      {
        queryKey: ["chart-period"],
        queryFn: () => {
          return fetchChartPeriod<IRawChartData<TChartPeriodData>>();
        },
      },
    ],
  });

  const [cryptoQuery, periodQuery] = results;

  const isPending = cryptoQuery.isPending || periodQuery.isPending;

  return {
    isPending,
    cryptoData: cryptoQuery.data,
    periodData: periodQuery.data,
  };
};

export default useCombineQuereis;
