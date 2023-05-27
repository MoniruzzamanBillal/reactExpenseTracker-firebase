import React from "react";
import { GlobalContext } from "./Context";
import { TbCurrencyTaka } from "react-icons/tb";

export default function DataShow() {
  const { save, savingDays } = GlobalContext();

  return (
    <>
      <div className="DataContainer mob:w-full sm:w-11/12 md:w-10/12 lg:w-1/2 w-11/12 m-auto p-1 mb-2">
        <div className="dataWrapper  flex justify-center">
          <div className="section1 mob:w-full m-auto w-1/3">
            <a
              href="#"
              className="block w-full p-2 m-auto bg-white border border-gray-200 rounded-md shadow-md hover:bg-gray-50 text-center text-green-700"
            >
              <h5 className="mb-1 text-2xl font-bold tracking-tight">
                Your Saving
              </h5>
              {/* top starts  */}
              <div className="topContainer">
                <p className="text-2xl font-semibold flex justify-center items-center ">
                  {save}
                  <span>
                    <TbCurrencyTaka />
                  </span>
                </p>
              </div>
              {/* top ends  */}

              {/* bottom starts  */}
              <div className="bottomContainer text-blue-600 p-1">
                <p> In {savingDays} days </p>
              </div>
              {/* bottom ends  */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
