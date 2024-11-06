import HighchartsReact from "highcharts-react-official";
import HighCarts from "highcharts";
import { Options } from "highcharts";
import { IChartData } from "@/types/types";

const Chart = ({ data }: { data: IChartData[] }) => {
  const options: Options = {
    title: {
        text: undefined
    }, 
    xAxis: [
      {
        categories: data.map((item) => item.title),
        labels: {
          style: {
            fontSize: "12px",
            fontWeight: "200",
          },
        },

      },
      {
        labels: {
          enabled: false,
        },
      },
    ],
    yAxis: [
      {
        title: {
          text: undefined,
        },
        opposite: true,
        height: "65%",
      },
      {
        title: { text: undefined },
        opposite: false,
        top: "0",
        height: "65%",
      },
      {
        title: { text: undefined },
        height: "30%",
        top: "70%",
        labels: { enabled: false },
      },
    ],
    series: [
      {
        name: `قیمت ${data[0].coin.fa_name}`,
        type: "area",
        data: data.map((item) => Number(item.irt_price)),
        yAxis: 0,
        xAxis: 0,
        color: "#F7931A",
        fillColor: "#F7931A1A",
        legendSymbol: "rectangle",
      },
      {
        name: "برابری",
        type: "line",
        data: data.map((item) => Number(item.price)),
        yAxis: 1,
        xAxis: 0,
        legendSymbol: "rectangle",
        color: "#1652F0",
      },
      {
        xAxis: 0,
        name: "نرخ دلار",
        type: "area",
        data: data.map((item) => Number(item.price)),
        yAxis: 2,
        color: "#4BB543",
        fillColor: "#4BB5431A",
        legendSymbol: "rectangle",

      },
    ],
  };

  console.log(data);
  return <HighchartsReact highcharts={HighCarts} options={options} />;
};

export default Chart;
