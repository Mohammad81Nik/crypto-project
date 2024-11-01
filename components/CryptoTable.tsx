"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useReactTable, createColumnHelper, getCoreRowModel} from "@tanstack/react-table";
import { useState } from "react";

import { fetchData } from "@/axios/axios";
import { ICryptoItem, ITableColumn } from "@/types/types";
import Image from "next/image";

const CryptoTable = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["crypto-price-list"],
    queryFn: fetchData<ICryptoItem>
  });




  const columnHelper = createColumnHelper<ITableColumn>()

  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => <p>نام رمزارز</p>,
      cell: props => {
        return <div>
          <Image src={props.getValue().icon} alt="crypto Icon" />
          <div>
            <span>{props.getValue().fa}</span>
            <span>{props.getValue().en}</span>
          </div>
        </div>
      }
    }),
    columnHelper.accessor('price', {
      id: 'price',
      header: () => <p>ارزش دلاری</p>,
      cell: props => {
        return <p>{props.getValue()}</p>
      }
    }),
    columnHelper.accessor('daily_change_percent', {
      id: 'daily_change_percent',
      header: 'تغییر روزانه',
      cell: props => {
        return <p>{props.getValue()}</p>
      }
    }),
    columnHelper.accessor('sell_irt_price', {
      id: 'sell_irt_price',
      header: 'فروش به والت',
      cell: props => {
        return <p>{props.getValue()}</p>
      }
    }),
    columnHelper.accessor('buy_irt_price', {
      id: 'buy_irt_price',
      header: 'خرید به والت',
      cell: props => {
        return <p>{props.getValue()}</p>
      }
    }),
    columnHelper.accessor('searchBar', {
      id: 'searchBar',
    })
  ]

  let table;

  if (data) {
    const cryptoData: ITableColumn[] = data.map(item => {
      return {
        name: {
          fa: item.fa_name,
          en: item.en_name,
          icon: item.icon
        },
        price: item.price,
        buy_irt_price: item.buy_irt_price,
        sell_irt_price: item.sell_irt_price,
        searchBar: <input/>
      }
    })
    table = useReactTable({
      columns, data, getCoreRowModel: getCoreRowModel()
    })
  }

  return <div>

  </div>;
};

export default CryptoTable;
