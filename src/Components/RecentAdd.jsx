import React from "react";
import { GlobalContext } from "./Context";

export default function RecentAdd() {
  const { recentAdd, recentExp, recentDate, recentSaving } = GlobalContext();
  return (
    <>
      <div className="recentAddContainer md:w-10/12 lg:w-1/2  w-11/12 m-auto mb-4">
        <div className="recentAddWrapper flex justify-center">
          <div className="section2 mob:bg-blue-400 w-full">
            <a
              href="#"
              className="block w-full p-3 m-auto bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 text-center"
            >
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 ">
                Recent transaction
              </h5>
              <p class="font-normal text-xl mb-2 text-gray-800 ">
                Date = {recentDate}
              </p>
              <p class="font-normal text-xl mb-2 text-gray-800 ">
                add = {recentAdd} taka
              </p>
              <p class="font-normal text-xl mb-2 text-gray-800 ">
                expense = {recentExp} taka
              </p>

              <p class="font-normal text-xl  text-gray-800 ">
                Saving = {recentSaving} taka
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
