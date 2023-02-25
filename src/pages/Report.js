import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";

function Report() {
  return (
    <Phone>
      <div className="flex flex-col content-center h-[800px]">
        <div className="flex justify-center pt-3">
          Report for week:
          <select>
            <option>20th Feb - 26th Feb 2023</option>
            <option>13th Feb - 19th Feb 2023</option>
            <option>6th Feb - 12th Feb 2023</option>
          </select>
        </div>
        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Report;
