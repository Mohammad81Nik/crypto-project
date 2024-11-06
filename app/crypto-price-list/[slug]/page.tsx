"use client";
import { fetchCryptoData } from "@/axios/axios";
import Questions from "@/components/Q&A/Questions";
import TransactionContainer from "@/components/crypto-transaction-page/TransactionContainer";
import { ICryptoItem } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import AdditionalInfo from "@/components/crypto-transaction-page/AdditionalInfo";
import InitialInfo from "@/components/crypto-transaction-page/InitialInfo";
import Guide from "@/components/crypto-transaction-page/Guide";
import Chart from "@/components/crypto-price-list-page/Chart";

const page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["currency-description"],
    queryFn: () => {
      return fetchCryptoData<ICryptoItem>(slug);
    },
  });

  return (
    <div className="w-full pt-[60px] pb-[60px] pr-[2%] lg:pr-[5%] xl:pr-[150px] pl-[2%] lg:pl-[5%] xl:pl-[150px] bg-table-body-row-1 flex flex-col gap-[50px] custom-tablet:gap-[108px]">
      {isPending && <p>Loading...</p>}
      {data && <TransactionContainer data={data[0]} />}
      {data && <InitialInfo about={data[0].about} crypto_name={data[0].fa_name}/>}
      <Chart />
      {data && (
        <AdditionalInfo about={data[0].about} crypto_name={data[0].fa_name} />
      )}
      <Questions />
      {data && <Guide currency_name={data[0].fa_name}/>}
    </div>
  );
};

export default page;
