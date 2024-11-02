import { ReactNode } from "react"

export interface ITableItem  {
    id: number,
    currency_code: string,
    fa_name: string,
    price: string,
    daily_change_percent: string,
    icon: string,
    buy_irt_price: string,
    sell_irt_price: string,
}

export interface ICryptoItem extends ITableItem {
    en_name: string,
    irt_price: string,
    rate: number,
    about: string,
}

export interface ITable {
    name: {
        fa: string,
        en: string,
        icon: string
    },
    price: string,
    daily_change_percent: string,
    buy_irt_price: string,
    sell_irt_price: string,
    cta: ReactNode
}