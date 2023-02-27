import { useState } from "react";
import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";
import Graph from "../components/Graph";

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
        <div className="flex justify-center pt-3">
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
        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Report;
