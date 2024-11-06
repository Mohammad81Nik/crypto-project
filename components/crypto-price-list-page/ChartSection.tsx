"use client";
import { useQuery } from "@tanstack/react-query";
import { IChartData, IRawChartData, TChartPeriodData } from "@/types/types";
import { fetchChartData } from "@/axios/axios";
import { useState } from "react";
import Chart from "./Chart";

const ChartSection = ({
  periods,
  currency_code,
}: {
  periods: TChartPeriodData[];
  currency_code: string;
}) => {
  const periodMap = periods.map((period) => {
    if (period === "24h") {
      return {
        originalUnit: period,
        unit: "ساعته",
        value: "24",
      };
    } else if (period === "1w") {
      return {
        originalUnit: period,
        unit: "هفته",
        value: "1",
      };
    } else if (period === "1m") {
      return {
        originalUnit: period,
        unit: "ماهه",
        value: "1",
      };
    } else if (period === "3m") {
      return {
        originalUnit: period,
        unit: "هفته",
        value: "3",
      };
    } else if (period === "1y") {
      return {
        originalUnit: period,
        unit: "ساله",
        value: "1",
      };
    } else {
      return {
        originalUnit: period,
        unit: "",
        value: "",
      };
    }
  });

  const [chartPeriod, setChartPeriod] = useState<TChartPeriodData>("24h");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["chart-data", chartPeriod, currency_code],
    queryFn: () => {
      return fetchChartData<IRawChartData<IChartData>>(
        chartPeriod,
        currency_code
      );
    },
  });

  return (
    <div className="w-full flex flex-col gap-9 bg-white p-8 rounded-[30px]">
      <div className="w-full flex flex-row-reverse gap-4">
        {periodMap.map((period, index) => {
          if (index <= 4) {
            return (
              <button
                className={`flex flex-row-reverse items-center justify-center gap-1 ${chartPeriod === period.originalUnit ? 'text-buy-button-color font-bold' : 'text-text-color font-normal'}`}
                key={Math.random()}
                onClick={() => {
                  setChartPeriod(period.originalUnit);
                }}
              >
                <span>{period.value}</span>
                <span>{period.unit}</span>
              </button>
            );
          }
        })}
      </div>
      {data && <Chart data={data.items}/>}
    </div>
  );
};

export default ChartSection;