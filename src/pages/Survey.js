import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Survey() {
  const [question, setQuestion] = useState("1");

  const clickHandler = (sum) => {
    if (question < 10) {
      if (sum === "plus") {
        let num = question;
        num++;
        setQuestion(num);
      } else if (question > 1) {
        let num = question;
        num--;
        setQuestion(num);
      }
    } else {
      return;
    }
  };

  return (
    <Phone>
      <div className="flex flex-col h-[800px]">
        <h2 className="text-3xl text-center pt-3 mb-3">Weekly Check-in</h2>
        <div className="mx-3 mb-6">
          <p className="p-2">{question}/10</p>
          <a
            href="#"
            class="block max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <p class="font-normal text-gray-700 pb-32 pt-2 pl-2">
              Question appears here...
            </p>
            <form>
              <textarea
                id="message"
                rows="8"
                class="block p-2.5 w-full rounded-lg text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Write your thoughts here..."
              ></textarea>
            </form>
          </a>
        </div>
        <div className="flex justify-between px-4">
          <button
            className="p-5 border-2 border-black rounded-full hover:bg-gray-100 cursor-pointer"
            onClick={() => clickHandler()}
          >
            <ArrowLeftIcon className="w-6 h-6"></ArrowLeftIcon>
          </button>
          <button
            className="p-5 border-2 border-black rounded-full hover:bg-gray-100 cursor-pointer"
            onClick={() => clickHandler("plus")}
          >
            {question == 10 ? (
              <CheckIcon className="w-6 h-6" />
            ) : (
              <ArrowRightIcon className="w-6 h-6"></ArrowRightIcon>
            )}
          </button>
        </div>
        {question == 10 ? (
          <Link to="/" className="flex justify-center pt-6 px-2">
            <button
              type="button"
              class="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full"
            >
              Submit?
            </button>
          </Link>
        ) : (
          <p></p>
        )}
        <div className="mt-auto">
          <FooterNav />
        </div>
      </div>
    </Phone>
  );
}

export default Survey;
