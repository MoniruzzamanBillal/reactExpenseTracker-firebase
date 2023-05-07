import React from "react";

export default function RecentAdd() {
  return (
    <>
      <div className="recentAddContainer w-10/12 m-auto ">
        <div className="recentAddWrapper border border-black flex justify-center">
          <div className="section2 w-1/2">
            <a
              href="#"
              class="block w-11/12 p-3 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 text-center"
            >
              <p class="font-normal text-xl  text-gray-800 ">add - 50 taka</p>
              <p class="font-normal text-xl text-gray-800 ">
                expense - 100 taka
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
