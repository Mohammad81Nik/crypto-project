"use client";
import { useQuery } from "@tanstack/react-query";
import { IChartData, IRawChartData, TChartPeriodData } from "@/types/types";
import { fetchChartData } from "@/axios/axios";
import { useState } from "react";
import Chart from "./Chart";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ChartSection = ({
  periods,
  currency_code,
  fa_name
}: {
  periods: TChartPeriodData[];
  currency_code: string;
  fa_name: string
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
        unit: "ماه",
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
    <div className="w-full h-[697px] flex flex-col gap-[32px] sm:gap-[48px] custom-tablet:gap-[56px] lg:gap-[58px] xl:gap-[63px]">
      <h2 className="text-[20px] custom-tablet:text-[30px] font-extrabold text-center custom-tablet:text-right">نمودار قیمت {fa_name} و نرخ برابری تومان</h2>
      <div className="w-full flex flex-col gap-9 bg-white py-4 px-[44px] lg:px-[59px] xl:px-[67px] rounded-[30px]">
        <div className="w-full flex flex-row-reverse gap-4">
          {periodMap.map((period, index) => {
            if (index <= 4) {
              return (
                <button
                  className={`flex flex-row-reverse items-center justify-center gap-1 ${
                    chartPeriod === period.originalUnit
                      ? "text-buy-button-color text-[12px] font-bold"
                      : "text-text-color text-[12px] font-normal"
                  }`}
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
        {isPending && (<div className="w-full flex items-center justify-center h-[500px] gap-4">
          <Skeleton style={{display: "block"}} circle={true} height={30} width={30} />
          <Skeleton style={{display: "block"}} circle={true} height={30} width={30} />
          <Skeleton style={{display: "block"}} circle={true} height={30} width={30} />
        </div>)}
        {data && <Chart data={data.items} />}
      </div>
    </div>
  );
};

export default ChartSection;
