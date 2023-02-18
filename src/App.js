import * as React from "react";
import Phone from "./components/Phone";
import Gauge from "./components/Gauge";

function App() {
  return (
    <Phone>
      <div className="flex justify-center pt-6">
        <h1 className="text-5xl font-bebasneue">BetBacked</h1>
      </div>
      <Gauge></Gauge>
    </Phone>
  );
}

export default App;
