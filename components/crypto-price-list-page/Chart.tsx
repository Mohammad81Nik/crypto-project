import HighchartsReact from "highcharts-react-official";
import HighCarts from "highcharts";
import { Options } from "highcharts";

const options: Options = {
  title: {
    text: "My Chart",
  },
  xAxis: {

  },
  series: [
    { type: "line", data: [1, 2, 3] },
    { type: 'line', data: [2, 3, 5]}
  
  ],
};

const Chart = () => {
  return <div>
    <HighchartsReact highcharts={HighCarts} options={options} />
  </div>;
};

export default Chart;
