import Phone from "../components/Phone";
import FooterNav from "../components/FooterNav";
import betfred from "../components/assets/betfred.jpg";
import bet365 from "../components/assets/bet365logo.png";

function Account() {
  return (
    <Phone>
      <div className="flex flex-col h-[800px]">
        <div>
          <h2 className="text-3xl px-4 pt-1 font-gloock">Account</h2>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow p-3 tracking-tight text-gray-600 mx-3 mt-3">
          <div>
            <div className="flex justify-between">
              <p>Your personal information</p>
              <p className="text-sm text-gray-400 cursor-pointer">edit</p>
            </div>
            <div className="text-sm">
              <p>Andre Dukas</p>
              <p>46 years old</p>
              <p>Male</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow p-3 tracking-tight text-gray-600 mx-3 mt-1 ">
          <div>
            <p className="cursor-pointer">Change password</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow p-3 tracking-tight text-gray-600 mx-3 mt-1">
          <div>
            <p className="cursor-pointer">Change email</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow p-3 tracking-tight text-gray-600 mx-3 mt-6">
          <div>
            <h2 className="text-xl mb-2">Linked apps</h2>
          </div>
          <div className="flex justify-between items-center">
            <img
              src={betfred}
              alt="betfred logo"
              className="h-10 w-24 rounded-md"
            ></img>
            <div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <img
              src={bet365}
              alt="bet365 logo"
              className="h-10 w-24 rounded-md"
            ></img>
            <div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-6 w-full"
          >
            Link another app
          </button>
        </div>

        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Account;
