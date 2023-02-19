import wifi from "./assets/wifi.png";
import signal from "./assets/signal.png";
import battery from "./assets/battery.png";

function Phone(props) {
  return (
    <div className="flex justify-center bg-gray-200 py-10">
      <div className="w-[390px] h-[844px] rounded-xl bg-white">
        <div className="flex text-sm justify-between items-center py-3 px-5">
          <p>9:41</p>
          <div className="flex flex-row gap-2">
            <img src={signal} alt="signal icon" className="w-5 h-5"></img>
            <img src={wifi} alt="wifi icon" className="w-5 h-5"></img>
            <img src={battery} alt="battery icon" className="w-6 h-6"></img>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Phone;
