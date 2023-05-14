import React from "react";
import { GlobalContext } from "../Components/Context";

export default function History() {
  const { inco, expe, timeZONE } = GlobalContext();
  return (
    <>
      <div className="detailsContainer bg-slate-100">
        <div className="detailsWrapper p-3 m-auto w-10/12 ">
          <h1 className="mb-3  text-4xl text-center p-2 font-bold">History</h1>

          <div className="details grid  mob:grid-cols-1 mob:w-full sm:grid-cols-1 md:grid-cols-2 sm:w-11/12 grid-cols-2 gap-2 lg:w-10/12 m-auto">
            <div className="incomeHistory mob:w-10/12 md:w-full m-auto border border-black ">
              <a
                href="#"
                className="block max-h-60 overflow-auto mob:p-1 sm:p-3 m-auto p-3 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 text-center"
              >
                <h1 className=" text-2xl text-center p-1 font-bold">Income</h1>
                <ul className="p-2 flex justify-center">
                  <li className=" mb-2 ">
                    <div className="liContainer grid grid-cols-2 ">
                      <div className="liLeft ">
                        {timeZONE.map((ele) => (
                          <h1 className="mob:text-base sm:text-xl text-xl  font-bold">
                            {ele} :
                          </h1>
                        ))}
                      </div>
                      <div className="liRight self-center w-10/12">
                        {inco &&
                          inco.map((ele) => (
                            <p className=" mob:text-base md:text-xl text-xl font-normal self-center ">
                              {ele} taka
                            </p>
                          ))}
                      </div>
                    </div>
                  </li>
                </ul>
              </a>
            </div>

            <div className="ExpenseHistory mob:w-10/12 md:w-full m-auto border border-black ">
              <a
                href="#"
                className="block max-h-60 overflow-auto mob:p-1 sm:p-3 m-auto p-3 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 text-center"
              >
                <h1 className=" text-2xl text-center p-1 font-bold">Expense</h1>
                <ul className="p-2 flex justify-center">
                  <li className=" mb-2 ">
                    <div className="liContainer grid grid-cols-2 ">
                      <div className="liLeft self-center">
                        {timeZONE.map((ele) => (
                          <h1 className="mob:text-base sm:text-xl text-xl  font-bold">
                            {ele} :
                          </h1>
                        ))}
                      </div>
                      <div className="liRight  w-10/12">
                        {expe &&
                          expe.map((ele) => (
                            <p className="mob:text-base md:text-xl text-xl font-normal self-center ">
                              {ele} taka
                            </p>
                          ))}
                      </div>
                    </div>
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
