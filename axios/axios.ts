import axios from "axios";

const api = axios.create({
  baseURL: "https://b.wallet.ir/coinlist/",
});

export const fetchData = async <T>(page: number, searchParam: string) => {
  const res = await api.post("/list", {
    page: searchParam ? 1 : page,
    limit: 9,
    search: searchParam,
    currency_code: "",
  });

  return res.data as T;
};

export const fetchCryptoData = async <T>(currency_code: string) => {
  const res = await api.post("/list", {
    page: 1,
    limit: 9,
    search: "",
    currency_code: currency_code,
  });

  return res.data.items as T[];
};

export const fetchChartPeriod = async <T>() => {
  const res = await api.get("/chart-period");

  return res.data as T;
};

export const fetchChartData = async <T>(
  period: string,
  currency_code: string
) => {
  const res = await api.post("/chart", {
    period,
    currency_code,
  });

  return res.data as T;
};
