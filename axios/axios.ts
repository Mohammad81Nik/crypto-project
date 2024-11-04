import axios from "axios";

const api = axios.create({
    baseURL: "https://b.wallet.ir/coinlist/",
})

export const fetchData = async<T>(page: number) => {

    const res = await api.post('/list', {
        page: page,
        limit: 9,
        search: "",
        currency_code: "",
    })



    return res.data.items as T[];
}


export const fetchCryptoData = async<T>(currency_code: string) => {
    const res = await api.post('/list', {
        page: 1,
        limit: 9,
        search: "",
        currency_code: currency_code
    })

    return res.data.items as T[]
}