"use client";
import { fetchCryptoData } from "@/axios/axios";
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
    <div className="w-full pt-[60px] pb-[60px] pr-[150px] pl-[150px] bg-table-body-row-1">
      {isPending && <p>Loading...</p>}
      {data && <TransactionContainer data={data[0]}/>}
    </div>
  );
};

export default page;
