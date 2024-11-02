import axios from "axios";

const api = axios.create({
    baseURL: "https://b.wallet.ir/coinlist/list",
})

export const fetchData = async<T>(page: number) => {
    console.log(page)
    const res = await api.post('', {
        page: page,
        limit: 9,
        search: "",
        currency_code: "",
    })

    console.log(res.data);

    return res.data.items as T[];
}