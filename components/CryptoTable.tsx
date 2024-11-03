"use client";
import { flexRender } from "@tanstack/react-table";
import { useState } from "react";
import useTableInitializer from "@/hooks/use-table-initializer";
import { type ExpandedState } from "@tanstack/react-table";
import RowAccordian from "./ui/RowAccordian";

const CryptoTable = () => {
  const [pagination, setPagination] = useState<{
    pageIndex: number;
    pageSize: number;
  }>({
    pageIndex: 1,
    pageSize: 9,
  });

  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useTableInitializer({
    pagination,
    setPagination,
    expanded,
    setExpanded,
  });

  return (
    <div className="w-full mt-10 mb-10 min-h-[1000px]">
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
                      className={`w-[30%] md:w-[16.6%] text-center md:text-right justify-center md:justify-end items-center ${
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
        <tbody className="">
          {table.getRowModel().rows.map((row) => {
            return (
              <>
                <tr
                  onClick={() => {
                    if (row.getIsExpanded()) {
                      row.toggleExpanded(false);
                    } else {
                      row.toggleExpanded(true);
                    }
                  }}
                  key={row.id}
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
                        className={`w-[30%] min-w-0 truncate  text-center justify-center md:justify-end items-center p-2 custom-mobile:p-4  flex md:w-[16.6%] md:text-right ${
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
                    key={row.id + 1}
                    className={`w-full md:hidden  ${
                      Number(row.id) % 2 === 0
                        ? "bg-table-body-row-1"
                        : "bg-table-body-row-2"
                    }`}
                  >
                    <td
                      key={row.id + "accord"}
                      className="w-full pt-[25px] pb-[25px] pr-[15px] pl-[15px] flex flex-col items-center gap-4"
                    >
                      <RowAccordian
                        buy_irt_price={row.original.buy_irt_price}
                        sell_irt_price={row.original.sell_irt_price}
                        currency_code={row.original.cta}
                      />
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>

      <div className="w-full mb-10 flex justify-between mt-10">
        <button
          onClick={() => {
            table.nextPage();
          }}
          className="bg-primary-color text-white px-5 py-3 rounded-xl"
        >
          Next
        </button>
        <button
          onClick={() => {
            table.previousPage();
          }}
          className="bg-primary-color text-white px-5 py-3 rounded-xl"
          disabled={!table.getCanPreviousPage()}
        >
          previous
        </button>
      </div>
    </div>
  );
};

export default CryptoTable;
