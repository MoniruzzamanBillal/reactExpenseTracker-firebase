import React from "react";
import { GlobalContext } from "../Components/Context";

export default function History() {
  const { inco, expe, timeZONE, data } = GlobalContext();
  return (
    <>
      <div className="detailsContainer bg-violet-400">
        <div className="detailsWrapper p-3 m-auto w-10/12 bg-green-400">
          <h1 className="bg-yellow-200 mb-3  text-3xl text-center p-2 font-bold">
            History
          </h1>
          <div className="details grid grid-cols-2 gap-2 bg-slate-400 w-10/12 m-auto">
            <div className="incomeHistory border border-black bg-pink-300">
              <h1 className="bg-red-300 text-2xl text-center p-1 font-bold">
                Income
              </h1>
              <ul className="p-2 flex justify-center">
                <li className="bg-blue-500 mb-2 ">
                  <div className="liContainer grid grid-cols-2 gap-3 bg-gray-400">
                    <div className="liLeft bg-red-500">
                      {timeZONE.map((ele) => (
                        <h1> {ele}</h1>
                      ))}
                    </div>
                    <div className="liRight bg-blue-600">
                      {inco && inco.map((ele) => <p>{ele} taka</p>)}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ExpenseHistory border border-black bg-blue-200">
              <h1 className="bg-blue-200 text-2xl text-center p-1 font-bold">
                Expense
              </h1>
              <ul className="p-2 flex justify-center">
                <li className="bg-blue-500 mb-2 ">
                  <div className="liContainer grid grid-cols-2 gap-3 bg-gray-400">
                    <div className="liLeft bg-red-500">
                      {timeZONE.map((ele) => (
                        <h1> {ele}</h1>
                      ))}
                    </div>
                    <div className="liRight bg-blue-600">
                      {expe && expe.map((ele) => <p>{ele} taka</p>)}
                    </div>
                  </div>
                </li>

                {/* {expe &&
                  expe.map((ele) => <li>8 - may - 2023 - {ele} taka</li>)} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
