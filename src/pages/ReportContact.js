import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";
import { Link } from "react-router-dom";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

function ContactForm() {
  return (
    <Phone>
      <div className="flex flex-col h-[800px]">
        <div className="mx-2 px-1">
          <h2 className="text-3xl pt-1 font-gloock mb-2">Talk to us...</h2>
          <div className="flex justify-between mb-4">
            <p>Please allow up to 48 hours to hear back</p>
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
          </div>

          <form>
            <textarea
              id="message"
              rows="8"
              className="p-2.5 w-full rounded-lg text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Write details here..."
            ></textarea>
          </form>
          <Link to="/" className="flex justify-center pt-6">
            <button
              type="button"
              class="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
            >
              Submit?
            </button>
          </Link>
        </div>

        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default ContactForm;
