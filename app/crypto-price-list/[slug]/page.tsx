"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchCryptoData } from "@/axios/axios";
import { type ICryptoItem } from "@/types/types";
import { Suspense, use } from "react";

const useSusQuery = (currency_code: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [`${currency_code}-description`],
    queryFn: () => fetchCryptoData<ICryptoItem>(currency_code),
  });
  return data;
};

const page = ({ params }: { params: {slug: string}}) => {
  const data = useSusQuery(params.slug);
  return (
    <div>
      <h1>crypto detail page</h1>
      <Suspense fallback={<p>loading...</p>}>
        <div>{data[0].fa_name}</div>
      </Suspense>
    </div>
  );
};

export default page;
