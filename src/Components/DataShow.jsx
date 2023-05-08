import React from "react";
import { GlobalContext } from "./Context";

export default function DataShow() {
  const { save } = GlobalContext();
  return (
    <>
      <div className="DataContainer w-10/12 m-auto p-1 mb-2">
        <div className="dataWrapper border border-black flex justify-center">
          <div className="section1 w-1/3">
            <a
              href="#"
              class="block w-11/12 p-3 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 text-center"
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
