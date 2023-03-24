import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signpost from "../components/Signpost";

function Help() {
  const [answer, setAnswer] = useState("");

  const clickHandler = (a) => {
    if (a === 1) {
      setAnswer(1);
    }
  };

  return (
    <Phone>
      <div className="flex flex-col h-[800px]">
        <h1 className="text-3xl px-4 pt-1 font-gloock mb-3">Help</h1>
        <div className="px-4">
          <h2 className="mb-3">Do you need help with a gambling addiction?</h2>
          <div className="flex justify-around gap-1">
            <button
              className="border border-gray-200 w-1/2 p-1 rounded-lg hover:bg-gray-100"
              onClick={() => clickHandler(1)}
            >
              Yes
            </button>
            <Link
              className="border border-gray-200 w-1/2 p-1 rounded-lg hover:bg-gray-100 text-center"
              to="/home"
            >
              No
            </Link>
          </div>
          {answer === 1 ? (
            <div className="mt-3">
              <Signpost></Signpost>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Help;
