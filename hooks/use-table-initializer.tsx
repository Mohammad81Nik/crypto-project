import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  type ExpandedState,
} from "@tanstack/react-table";
import Image from "next/image";
import { type ITable } from "@/types/types";
import searchIcon from "@/public/searchIcon.svg";
import useProvideData from "./use-provide-data";
import { type Dispatch, type SetStateAction, useCallback } from "react";
import ToTransactionButton from "@/components/ui/ToTransactionButton";

const useTableInitializer = ({
  pagination,
  expanded,
  setPagination,
  setExpanded,
}: {
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
  expanded: ExpandedState;
  setPagination: Dispatch<
    SetStateAction<{ pageIndex: number; pageSize: number }>
  >;
  setExpanded: Dispatch<SetStateAction<ExpandedState>>;
}) => {
  const tableData = useProvideData({ page: pagination.pageIndex });

  const columnHelper = createColumnHelper<ITable>();

  const handleExpandedChange = useCallback(setExpanded, []);
  const handlePaginationChange = useCallback(setPagination, []);

  const column = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => <p className="text-[14px] font-normal">نام رمزارز</p>,
      cell: (props) => {
        return (
          <div className="flex flex-row-reverse items-center gap-4">
            <Image
              src={props.getValue().icon}
              alt="crypto icon"
              width={33}
              height={33}
            />
            <div className="flex flex-col justify-end">
              <span className="text-right text-[12px] lg:text-[14px] font-normal">
                {props.getValue().fa}
              </span>
              <span className="text-right truncate">{props.getValue().en}</span>
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
    columnHelper.accessor("cta", {
      id: "cta",
      header: () => (
        <div className="flex flex-row-reverse bg-white rounded-[8px] py-3  px-2 text-[16px] font-normal">
          <Image src={searchIcon} alt="search icon" />
          <input
            type="search"
            placeholder="...جستجو"
            className="text-right w-full outline-none"
          />
        </div>
      ),
      cell: (props) => (
        <ToTransactionButton
          isUsedInAccordian={false}
          currency_code={props.row.original.cta}
        />
      ),
    }),
  ];

  const table = useReactTable({
    data: tableData,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: handlePaginationChange,
    manualPagination: true,
    state: {
      pagination,
      expanded,
    },
    autoResetPageIndex: false,
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
    onExpandedChange: handleExpandedChange,
  });

  return table;
};

export default useTableInitializer;
