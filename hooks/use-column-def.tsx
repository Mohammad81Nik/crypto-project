import { useMemo, type Dispatch, type SetStateAction } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { type ICryptoItem } from "@/types/types";
import Image from "next/image";
import searchIcon from "@/public/searchIcon.svg";
import ToTransactionButton from "@/components/ui/ToTransactionButton";

const useColumnDef = (setSearchParam: Dispatch<SetStateAction<string>>) => {
  return useMemo(() => {
    const columnHelper = createColumnHelper<ICryptoItem>();
    return [
      columnHelper.accessor("en_name", {
        id: "name",
        header: () => <p className="text-[14px] font-normal">نام رمزارز</p>,
        cell: (props) => {
          return (
            <div className="flex flex-row-reverse items-center gap-4">
              <Image
                src={props.row.original.icon}
                alt="crypto icon"
                width={33}
                height={33}
              />
              <div className="flex flex-col justify-end">
                <span className="text-right text-[12px] lg:text-[14px] font-normal">
                  {props.row.original.fa_name}
                </span>
                <span className="text-right truncate">
                  {props.row.original.en_name}
                </span>
              </div>
            </div>
          );
        },
      }),
      columnHelper.accessor("price", {
        id: "price",
        header: () => <p className="text-[14px] font-normal">ارزش دلاری</p>,
        cell: (props) => (
          <p>${props.getValue().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        ),
      }),
      columnHelper.accessor("daily_change_percent", {
        id: "daily_percent_change",
        header: (props) => (
          <p className={`text-[14px] font-normal`}>تغییر روزانه</p>
        ),
        cell: (props) => <p>{props.getValue()}</p>,
      }),
      columnHelper.accessor("sell_irt_price", {
        id: "sell_irt_price",
        header: () => <p className="text-[14px] font-normal">فروش به والت</p>,
        cell: (props) => (
          <p>{props.getValue().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        ),
      }),
      columnHelper.accessor("buy_irt_price", {
        id: "buy_irt_price",
        header: () => <p className="text-[14px] font-normal">خرید از والت</p>,
        cell: (props) => (
          <p>{props.getValue().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        ),
      }),
      columnHelper.accessor("currency_code", {
        id: "cta",
        header: () => (
          <div className="flex flex-row-reverse gap-4 bg-white rounded-[8px] py-3 px-2 text-[16px] font-normal">
            <Image src={searchIcon} alt="search icon" />
            <input
              type="text"
              placeholder="...جستجو"
              className="text-right w-[80%] outline-none"
              onChange={(event) => {
                setSearchParam(event.target.value);
              }}
            />
          </div>
        ),
        cell: (props) => (
          <ToTransactionButton
            isUsedInAccordian={false}
            currency_code={props.row.original.currency_code}
          />
        ),
      }),
    ];
  }, []);
};

export default useColumnDef;
