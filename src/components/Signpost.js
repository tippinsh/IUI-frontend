import gamcare from "./assets/gamcare_helpline.png";

function Signpost() {
  return (
    <div className="flex flex-col gap-6 justify-around">
      <h2>
        We're glad you've reached out. Below is a list of services that can
        support you with gambling addiction.
      </h2>
      <img src={gamcare} className="rounded-lg w-full"></img>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-28 w-full bg-[#DBF5F0] rounded-md flex justify-center items-center cursor-pointer p-1 text-sm">
          <p>GamCare</p>
        </div>
        <div className="h-28 w-full bg-[#DBF5F0] rounded-md flex justify-center items-center cursor-pointer p-1 text-sm text-center">
          <p>National Problem Gambling Clinic</p>
        </div>
        <div className="h-28 w-full bg-[#DBF5F0] rounded-md flex justify-center items-center cursor-pointer p-1 text-sm text-center">
          <p>Gamblers Anonymous</p>
        </div>
        <div className="h-28 w-full bg-[#DBF5F0] rounded-md flex justify-center items-center cursor-pointer p-1 text-sm">
          <p>BeGambleAware</p>
        </div>
        <div className="h-28 w-full bg-[#DBF5F0] rounded-md flex justify-center items-center cursor-pointer p-1 text-sm text-center">
          <p>National Gambling Treatment Service</p>
        </div>
        <div className="h-28 w-full bg-[#DBF5F0] rounded-md flex justify-center items-center cursor-pointer p-1 text-sm text-center">
          <p>Counselling Directory</p>
        </div>
      </div>
    </div>
  );
}

export default Signpost;
