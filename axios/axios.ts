import axios from "axios";

const api = axios.create({
    baseURL: "https://b.wallet.ir/coinlist/list",
})

export const fetchData = async<T>(page: number) => {

    const res = await api.post('', {
        page: page,
        limit: 9,
        search: "",
        currency_code: "",
    })



    return res.data.items as T[];
}