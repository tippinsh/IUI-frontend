import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <Phone>
      <div className="flex flex-col h-[800px]">
        <h2 className="text-3xl px-4 pt-1 font-gloock text-center">
          How can we help you?
        </h2>
        <Link
          to="/help_now"
          className="bg-white border border-gray-200 rounded-lg shadow p-4 tracking-tight text-gray-600 mx-3 mt-6"
        >
          I need help with a gambling addiction
        </Link>
        <Link className="bg-white border border-gray-200 rounded-lg shadow p-4 tracking-tight text-gray-600 mx-3 mt-4">
          Report a bug
        </Link>
        <Link className="bg-white border border-gray-200 rounded-lg shadow p-4 tracking-tight text-gray-600 mx-3 mt-4">
          I need to speak with someone about my report
        </Link>
        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Contact;
