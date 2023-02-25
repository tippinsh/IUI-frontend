import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";

function Report() {
  return (
    <Phone>
      <div className="flex flex-col content-center h-[800px]">
        <div>Hello</div>
        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Report;
