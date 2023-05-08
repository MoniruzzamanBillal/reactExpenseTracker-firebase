import React from "react";
import { GlobalContext } from "./Context";

export default function RecentAdd() {
  const { recentAdd, recentExp } = GlobalContext();
  return (
    <>
      <div className="recentAddContainer w-10/12 m-auto mb-4">
        <div className="recentAddWrapper  border border-black flex justify-center">
          <div className="section2 w-1/2">
            <a
              href="#"
              class="block w-11/12 p-3 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 text-center"
            >
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 ">
                Recent transaction
              </h5>
              <p class="font-normal text-xl  text-gray-800 ">
                add - {recentAdd} taka
              </p>
              <p class="font-normal text-xl text-gray-800 ">
                expense - {recentExp} taka
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
