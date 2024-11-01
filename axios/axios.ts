import axios from "axios";

const api = axios.create({
    baseURL: "https://b.wallet.ir/coinlist/list",
})

export const fetchData = async<T>() => {
    const res = await api.post('', {
        page: 1,
        limit: 9,
        search: "",
        currency_code: "",
    })

    console.log(res.data);

    return res.data.items as T[];
}