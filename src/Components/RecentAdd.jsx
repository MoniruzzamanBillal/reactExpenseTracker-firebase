import React from "react";
import { GlobalContext } from "./Context";
import { TbCurrencyTaka } from "react-icons/tb";

export default function RecentAdd() {
  const { recentAdd, recentExp, recentDate, recentSaving, selected } =
    GlobalContext();
  return (
    <>
      <div className="recentAddContainer md:w-10/12 lg:w-1/2  w-11/12 m-auto mb-4">
        <div className="recentAddWrapper flex justify-center">
          <div className="section2  w-full">
            <a
              href="#"
              className="block w-full p-3 m-auto bg-white border border-gray-200 rounded-md shadow-lg hover:bg-gray-50 text-center"
            >
              <h5 class="mb-4 text-3xl text-center font-semibold tracking-tight text-gray-900 ">
                Recent transaction
              </h5>

              {/* date starts  */}
              <div className="date p-1 border-b-2 border-gray-200">
                <p class="font-normal text-xl mb-2 text-gray-800 ">
                  <span className="font-bold"> Date = </span> {recentDate}
                </p>
              </div>
              {/* date ends  */}

              {/* add starts  */}
              <div className="date p-1 border-b-2 border-gray-200 text-blue-600">
                <p class="font-normal text-xl mb-2 flex justify-center items-center">
                  <span className="font-bold"> add = </span> {recentAdd}
                  <TbCurrencyTaka />
                </p>
              </div>
              {/* add ends  */}

              {/* expense starts  */}
              <div className="date p-1 border-b-2 text-red-600 border-gray-200">
                <p class="font-normal text-xl mb-2 flex justify-center items-center">
                  <span className="font-bold">expense = </span>
                  {recentExp}
                  <TbCurrencyTaka className="" />
                </p>
              </div>
              {/* expense ends  */}

              {/* Saving starts  */}
              <div className="date p-1 text-green-700">
                <p class="font-normal text-xl mb-2 flex justify-center items-center">
                  <span className="font-bold">Saving = </span>
                  {recentSaving}
                  <TbCurrencyTaka />
                </p>
              </div>
              {/* Saving ends  */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
