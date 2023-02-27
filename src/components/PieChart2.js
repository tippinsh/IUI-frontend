import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart2() {
  const data = {
    labels: ["Win", "Loss"],
    datasets: [
      {
        label: "Amount",
        data: [100, 60],
        borderColor: "black",
        backgroundColor: ["#DBF5F0", "#5F7367"],
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
    <div className="w-40 h-40">
      <Pie data={data} options={options}></Pie>
    </div>
  );
}

export default PieChart2;
