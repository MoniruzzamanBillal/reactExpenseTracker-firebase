import React from "react";
import { GlobalContext } from "./Context";

export default function DataShow() {
  const { save } = GlobalContext();
  return (
    <>
      <div className="DataContainer mob:w-full sm:w-11/12 md:w-10/12 lg:w-1/2 w-11/12 m-auto p-1 mb-2">
        <div className="dataWrapper  flex justify-center">
          <div className="section1 mob:bg-blue-300 mob:w-full sm:bg-red-900 m-auto w-1/3">
            <a
              href="#"
              className="block w-full p-3 m-auto bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 text-center"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Your Balance
              </h5>
              <p class="font-normal text-xl text-gray-800 ">{save} taka</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
