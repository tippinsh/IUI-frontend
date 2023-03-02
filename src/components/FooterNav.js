import { LifebuoyIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <div className="flex justify-between items-center pb-4 px-4">
      <Link to="/help_now">
        <LifebuoyIcon className="h-6 w-6" />
      </Link>
      <Link to="/account">
        <UserCircleIcon className="h-6 w-6" />
      </Link>
      <Link to="/">
        <HomeIcon className="h-10 w-10" />
      </Link>
      <Link to="/report">
        <DocumentIcon className="h-6 w-6" />
      </Link>
      <Link to="/contact">
        <ChatBubbleOvalLeftIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}

export default FooterNav;
