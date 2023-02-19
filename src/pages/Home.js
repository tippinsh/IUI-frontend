import Phone from "../components/Phone";
import Gauge from "../components/Gauge";

function Home() {
  return (
    <Phone>
      <div className="flex justify-center pt-6">
        <h1 className="text-5xl font-bebasneue">BetBacked</h1>
      </div>
      <Gauge></Gauge>
      <section>
        <div>
          <h2>Quick look stats</h2>
        </div>
      </section>
    </Phone>
  );
}

export default Home;
