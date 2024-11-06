import HighchartsReact from "highcharts-react-official";
import HighCarts from "highcharts";
import { Options } from "highcharts";
import { IChartData } from "@/types/types";

const Chart = ({ data }: { data: IChartData[] }) => {
  const options: Options = {
    
    chart: {
      height: 500
    }, 
    tooltip: {
      useHTML: true,
      formatter: function() {
        return `
          <span style='display: flex; gap: 3px;'>
            <span>${this.series.name === 'برابری' ? "تومان" : "دلار"}</span>
            <span>${this.y?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          </span>
        `
      },
    },
    title: {
        text: undefined
    }, 
    xAxis: [
      {
        lineColor: '#F1F1F1',
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
        opposite: false,
        height: "70%",
        top: '10'
      },
      {
        title: { text: undefined },
        opposite: true,
        top: "10",
        height: "70%",
      },
      {
        title: { text: undefined },
        height: "25%",
        top: "75%",
        labels: { enabled: false },
      },
    ],
    series: [
      {
        marker: {
          enabled: false,

        },
        name: `قیمت ${data[0].coin.fa_name}`,
        type: "area",
        data: data.map((item) => Number(item.price)),
        yAxis: 0,
        xAxis: 0,
        color: "#F7931A",
        fillColor: "#F7931A1A",
        legendSymbol: "rectangle",
      },
      {
        marker: {
          enabled: false
        },
        name: "برابری",
        type: "line",
        data: data.map((item) => Number(item.irt_price)),
        yAxis: 1,
        xAxis: 0,
        legendSymbol: "rectangle",
        color: "#1652F0",
      },
      {
        marker: {
          enabled: false,
        },
        xAxis: 0,
        name: "نرخ دلار",
        type: "area",
        data: data.map((item) => Number(item.usd_price)),
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
