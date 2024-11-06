"use client";
import Questions from "@/components/Q&A/Questions";
import TransactionContainer from "@/components/crypto-transaction-page/TransactionContainer";
import { use } from "react";
import AdditionalInfo from "@/components/crypto-transaction-page/AdditionalInfo";
import InitialInfo from "@/components/crypto-transaction-page/InitialInfo";
import Guide from "@/components/crypto-transaction-page/Guide";
import ChartSection from "@/components/crypto-transaction-page/ChartSection";
import useCombineQuereis from "@/hooks/use-combine-queries";

const page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  const { isPending, cryptoData, periodData } = useCombineQuereis(slug);

  return (
    <div className="w-full pt-[60px] pb-[60px] pr-[2%] lg:pr-[5%] xl:pr-[150px] pl-[2%] lg:pl-[5%] xl:pl-[150px] bg-table-body-row-1 flex flex-col gap-[50px] custom-tablet:gap-[108px]">
      {isPending && <p>Loading...</p>}
      {cryptoData && <TransactionContainer data={cryptoData[0]} />}
      {cryptoData && (
        <InitialInfo
          about={cryptoData[0].about}
          crypto_name={cryptoData[0].fa_name}
        />
      )}
      {periodData && cryptoData && <ChartSection periods={periodData.items} currency_code={cryptoData[0].currency_code} fa_name={cryptoData[0].fa_name}/>}
      {cryptoData && (
        <AdditionalInfo
          about={cryptoData[0].about}
          crypto_name={cryptoData[0].fa_name}
        />
      )}
      <Questions />
      {cryptoData && <Guide currency_name={cryptoData[0].fa_name} />}
    </div>
  );
};

export default page;
