"use client";
import {
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";
import useTableInitializer from "@/hooks/use-table-initializer";

const CryptoTable = () => {
  const [pagination, setPagination] = useState<{
    pageIndex: number;
    pageSize: number;
  }>({
    pageIndex: 1,
    pageSize: 9,
  });

  const table = useTableInitializer({pagination, setPagination})

  
  return (
    <div className="w-full mt-10">
      <div className="w-full m-10 flex justify-between">
        <button
          onClick={() => {
            table.nextPage();
          }}
          className="bg-primary-color text-white px-5 py-3 rounded-xl"
          disabled={!table.getCanNextPage()}
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
      <table className="w-full">
        <thead className="w-full bg-table-header h-[70px] flex items-center rounded-[8px]">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr
                key={headerGroup.id}
                className="w-full flex flex-row-reverse p-8"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className="w-[16.6%] text-right flex justify-end items-center"
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
              <tr
                key={row.id}
                className={`w-full flex flex-row-reverse h-[81px]  ${
                  Number(row.id) % 2 === 0
                    ? "bg-table-body-row-1"
                    : "bg-table-body-row-2"
                }`}
              >
                {/* <div>
                  something
                </div> */}
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className={`w-[16.6%] text-right ${
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
