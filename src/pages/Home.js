import Phone from "../components/Phone";
import Gauge from "../components/Gauge";
import user1 from "./assets/user.jpeg";
import FooterNav from "../components/FooterNav";
import Button from "../components/Button";

function Home() {
  return (
    <Phone>
      <div className="flex flex-col content-center h-[800px]">
        <div className="flex flex-row justify-between px-8 mt-4">
          <h1 className="font-montserrat text-2xl font-black">Hi, Andre</h1>
          <div className="w-10 h-10">
            <img src={user1} alt="a user" className="rounded-full"></img>
          </div>
        </div>
        <Gauge></Gauge>
        <h2 className="text-center pt-3">
          You are currently scoring as{" "}
          <span className="font-bold">low risk</span>
        </h2>
        <section className="flex flex-col justify-center pt-12 px-8">
          <p className="mb-2 font-montserrat">Quick look insights</p>
          <div className="w-full rounded-lg shadow-md h-1/2 bg-[#FFFFF] px-2 text-[#585F66] text-sm font-sanspro">
            <ul className="list-disc bg-[#FFFFF] text-[#585F66] text-sm font-sanspro p-4">
              <li>
                You spent one hour and 15 minutes less in the casino this week
              </li>
              <li>
                Your spending is consistent and there are no significant
                changes.
              </li>
            </ul>
          </div>
          <div className="pt-4">
            <Button></Button>
          </div>
        </section>
        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Home;
