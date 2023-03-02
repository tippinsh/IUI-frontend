import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";

function Contact() {
  return (
    <Phone>
      <div className="flex flex-col h-[800px]">
        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Contact;
