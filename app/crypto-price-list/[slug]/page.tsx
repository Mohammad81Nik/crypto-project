"use client";
import { fetchCryptoData } from "@/axios/axios";
import Questions from "@/components/Q&A/Questions";
import TransactionContainer from "@/components/TransactionContainer";
import { ICryptoItem } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";

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
    <div className="w-full pt-[60px] pb-[60px] pr-[2%] lg:pr-[5%] xl:pr-[150px] pl-[2%] lg:pl-[5%] xl:pl-[150px] bg-table-body-row-1">
      {isPending && <p>Loading...</p>}
      {data && <TransactionContainer data={data[0]}/>}
      <Questions />
    </div>
  );
};

export default page;
