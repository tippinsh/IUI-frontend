import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Gauge() {
  const data = {
    labels: ["Risk level"],
    datasets: [
      {
        label: "",
        data: [30, 60],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          if (context.dataIndex === 0) {
            return getGradient(chart);
          } else {
            return "white";
          }
        },
        borderColor: ["rgb(71 85 105)", "rgb(71 85 105)"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  function getGradient(chart) {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
    } = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
    gradientSegment.addColorStop(0, "green");
    gradientSegment.addColorStop(0.5, "orange");
    gradientSegment.addColorStop(1, "red");
    return gradientSegment;
  }

  const gaugeText = {
    id: "gaugeText",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;

      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = "18px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseLine = "buttom";
      ctx.fillText("Low risk", xCenter, yCenter);
    },
  };

  return (
    <div className="w-2/3 mx-auto">
      <Doughnut
        data={data}
        options={options}
        plugins={[gaugeText]}
        className="mt-6"
      ></Doughnut>
    </div>
  );
}

export default Gauge;
