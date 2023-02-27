import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";

import { Bar } from "react-chartjs-2";

function Graph(props) {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Avg. number of hours",
        data: props.data,
        borderColor: "black",
        backgroundColor: ["rgb(246, 142, 95)", "rgb(255, 221, 74)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <div className="p-2">
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default Graph;
