"use client";
import { flexRender } from "@tanstack/react-table";
import { useState, Fragment } from "react";
import RowAccordian from "../ui/RowAccordian";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  type ExpandedState,
  type Table,
} from "@tanstack/react-table";
import { type ITable, type ICryptoItem } from "@/types/types";
import useProvideData from "@/hooks/use-provide-data";
import useColumnDef from "@/hooks/use-column-def";
import useDebounce from "@/hooks/useDebounce";
import usePaginationButtons from "@/hooks/use-pagination-buttons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CryptoTable = () => {
  /////////////////// STATE INITIALIZATION ///////////////////
  const [tableData, setTableData] = useState<ITable[]>([]);
  const [searchParam, setSearchParam] = useState<string>("");
  const [pagination, setPagination] = useState<{
    pageIndex: number;
    pageSize: number;
  }>({
    pageIndex: 1,
    pageSize: 9,
  });
  const [expanded, setExpanded] = useState<ExpandedState>({});

  //////////////// DEBOUNCING THE SEARCH PARAM USING THE CUSTOM HOOK //////////////
  const debouncedSearchParam = useDebounce(searchParam, 500);

  /////////////// DEFINING THE COLUMNS USING USEMEMO() ////////////
  const column = useColumnDef(setSearchParam);

  /////////////// GET THE TABLE DATA /////////////

  const { data, isPending, isError, error, isFetching, isPlaceholderData } =
    useProvideData({ page: pagination.pageIndex, debouncedSearchParam });

  ////////////// INITIALIZING THE PAGINATION BUTTONS /////////////////
  const btnArray = usePaginationButtons(data?.count, pagination.pageIndex);

  const paginButtonHandler = (
    btnNum: number,
    total_page: number,
    table: Table<ICryptoItem>
  ) => {
    if (btnNum === 1) {
      setPagination((prevState) => {
        return { ...prevState, pageIndex: 1 };
      });
    } else if (btnNum === total_page) {
      setPagination((prevState) => {
        return { ...prevState, pageIndex: total_page };
      });
    } else if (pagination.pageIndex - 1 === btnNum) {
      table.previousPage();
    } else if (pagination.pageIndex + 1 === btnNum) {
      table.nextPage();
    }
  };

  ///////////////////////// TABLE INITIALIZATION //////////////////////

  const table = useReactTable({
    data: data?.items || [],
    columns: column,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onExpandedChange: setExpanded,
    manualPagination: true,
    initialState: {
      pagination: {
        pageIndex: 1,
        pageSize: 9,
      },
    },
    state: {
      pagination,
      expanded,
    },
    pageCount: data?.total_page,
    autoResetPageIndex: false,
    getRowCanExpand: () => true,
  });

  return (
    <div className="w-full min-h-[900px]">
      <table className="w-full">
        <thead className="w-full bg-table-header h-[70px] flex items-center rounded-[8px]">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr
                key={headerGroup.id}
                className="flex w-full flex-row-reverse justify-between md:justify-end  p-8"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className={`w-[30%] md:w-[16.6%] text-center md:text-right ${
                        header.id === "name"
                          ? "justify-center md:justify-end"
                          : "justify-center"
                      } items-center ${
                        header.id === "sell_irt_price" ||
                        header.id === "buy_irt_price" ||
                        header.id === "cta"
                          ? "hidden md:flex"
                          : "flex"
                      }`}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {isFetching || isPending ? (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((row) => {
                return (
                  <tr
                    key={row.toString() + "isLoading"}
                    className="w-full h-[81px] flex items-center"
                  >
                    <td className="relative w-full h-full flex items-center">
                      <Skeleton
                        height={71}
                        style={{ display: "block" }}
                        containerClassName="flex-1"
                        highlightColor={`${
                          row % 2 === 0 ? "#F7F7F7" : "#FFFFFF"
                        }`}
                      />
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <></>
          )}
          {!isFetching && !isError && !isPlaceholderData && (
            <>
              {table.getRowModel().rows.map((row) => {
                return (
                  <Fragment key={row.id}>
                    <tr
                      onClick={() => {
                        if (row.getIsExpanded()) {
                          row.toggleExpanded(false);
                        } else {
                          row.toggleExpanded(true);
                        }
                      }}
                      className={`w-full flex flex-row-reverse justify-between md:justify-normal h-[81px] ${
                        Number(row.id) % 2 === 0
                          ? "bg-table-body-row-1"
                          : "bg-table-body-row-2"
                      }`}
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className={`w-[30%] min-w-0 truncate  text-center ${
                              cell.column.id === "name"
                                ? "justify-center md:justify-end"
                                : "justify-center"
                            } items-center p-2 custom-mobile:p-3  flex md:w-[16.6%] md:text-right ${
                              cell.column.id === "buy_irt_price" ||
                              cell.column.id === "sell_irt_price" ||
                              cell.column.id === "cta"
                                ? "hidden md:flex"
                                : undefined
                            } ${
                              cell.column.id === "daily_percent_change" &&
                              /-/.test(cell.row.original.daily_change_percent)
                                ? "text-red-600"
                                : cell.column.id === "daily_percent_change"
                                ? "text-green-500"
                                : undefined
                            } ${
                              cell.column.id === "cta"
                                ? "flex justify-center items-center"
                                : "flex justify-end items-center"
                            }`}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                    {row.getIsExpanded() && (
                      <tr
                        className={`w-full md:hidden  ${
                          Number(row.id) % 2 === 0
                            ? "bg-table-body-row-1"
                            : "bg-table-body-row-2"
                        }`}
                      >
                        <td className="w-full pt-[25px] pb-[25px] pr-[15px] pl-[15px] flex flex-col items-center gap-4">
                          <RowAccordian
                            buy_irt_price={row.original.buy_irt_price}
                            sell_irt_price={row.original.sell_irt_price}
                            currency_code={row.original.currency_code}
                          />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </>
          )}
        </tbody>
      </table>

      <div className="flex w-full mt-5 h-[31] gap-4 justify-center">
        {!isError && !isPending && data && data.items.length > 0 && (
          <>
            {btnArray.map((num) => {
              return (
                <button
                  key={Math.random().toString()}
                  className={`w-[31px] h-[31px] ${
                    !isFetching
                      ? "disabled:bg-primary-color disabled:text-white"
                      : undefined
                  }  ${
                    num === "..."
                      ? "bg-transparent"
                      : "bg-pagin-buttons transition-colors duration-500 hover:bg-primary-color hover:text-white"
                  }  rounded-[50%]`}
                  onClick={() => {
                    paginButtonHandler(Number(num), data.total_page, table);
                  }}
                  disabled={
                    Number(num) === pagination.pageIndex ||
                    (Number(num) === 1 && pagination.pageIndex === 1) ||
                    (Number(num) === data.total_page &&
                      pagination.pageIndex === data.total_page) ||
                    isFetching
                  }
                >
                  {num}
                </button>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default CryptoTable;
