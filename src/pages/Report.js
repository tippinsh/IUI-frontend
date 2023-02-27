import { useState } from "react";
import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";
import Graph from "../components/Graph";
import PieChart1 from "../components/PieChart1";
import PieChart2 from "../components/PieChart2";

const graphData = [
  [3, 1, 2, 0, 1, 1, 4],
  [1, 2, 4, 2, 1, 0, 2],
  [0, 2, 0, 1, 3, 4, 0],
];
let data = graphData[0];

function Report() {
  const [currentDate, previousDate] = useState("");

  const graphDataHandler = (event) => {
    data = graphData[event];
    previousDate(event);
  };

  return (
    <Phone>
      <div className="flex flex-col h-[800px]">
        <div className="flex justify-center pt-1">
          Report for week:
          <select
            value={currentDate}
            onChange={(e) => graphDataHandler(e.target.value)}
          >
            <option value="0">20th Feb - 26th Feb 2023</option>
            <option value="1">13th Feb - 19th Feb 2023</option>
            <option value="2">6th Feb - 12th Feb 2023</option>
          </select>
        </div>
        <div>
          <Graph data={data}></Graph>
        </div>
        <div className="flex justify-around mt-6">
          <div className="flex flex-col items-center gap-2">
            <PieChart1></PieChart1>
            <p>£ spent per game</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PieChart2></PieChart2>
            <p>Wins vs. Loss</p>
          </div>
        </div>
        <div className="px-4 mt-8">
          <h2 className="font-montserrat text-lg mb-2">
            Insights and recommendations
          </h2>
          <p className="shadow-md p-2 rounded-lg font-sanspro bg-[#DBF5F0]">
            Minim ullamco labore esse ex do.Incididunt commodo reprehenderit.
          </p>
          <p className="shadow-md p-2 rounded-lg font-sanspro bg-[#DBF5F0] mt-2">
            Minim ullamco labore esse ex do.Incididunt commodo reprehenderit.
          </p>
          <p className="shadow-md p-2 rounded-lg font-sanspro bg-[#DBF5F0] mt-2">
            Minim ullamco labore esse ex do.Incididunt commodo reprehenderit.
          </p>
        </div>
        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Report;
