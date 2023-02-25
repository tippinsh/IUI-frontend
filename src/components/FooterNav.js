import { LifebuoyIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

function FooterNav() {
  return (
    <div className="w-full flex justify-between items-center pb-4 px-4">
      <LifebuoyIcon className="h-6 w-6" />
      <UserCircleIcon className="h-6 w-6" />
      <HomeIcon className="h-10 w-10" />
      <DocumentIcon className="h-6 w-6" />
      <ChatBubbleOvalLeftIcon className="h-6 w-6" />
    </div>
  );
}

export default FooterNav;
