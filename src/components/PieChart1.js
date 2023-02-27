import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart1() {
  const data = {
    labels: ["Poker", "Football", "Rugby"],
    datasets: [
      {
        label: "Amount spent",
        data: [60, 40, 20],
        borderColor: "black",
        backgroundColor: ["#FFDD4A", "#F68E5F", "#DBF5F0"],
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

export default PieChart1;
