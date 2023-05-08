import React from "react";
import { GlobalContext } from "../Components/Context";

export default function History() {
  const { inco, expe } = GlobalContext();
  return (
    <>
      <div className="detailsContainer bg-violet-400">
        <div className="detailsWrapper m-auto w-10/12 bg-green-400">
          <h1 className="bg-yellow-200 mb-3  text-3xl text-center p-2 font-bold">
            History
          </h1>
          <div className="details grid grid-cols-2 gap-2 bg-slate-400 w-10/12 m-auto">
            <div className="incomeHistory border border-black bg-pink-300">
              <h1 className="bg-red-300 text-2xl text-center p-1 font-bold">
                Income
              </h1>
              <ul className="p-2">
                {inco &&
                  inco.map((ele) => <li>8 - may - 2023 - {ele} taka</li>)}
                {/* <li>8 - may - 2023 - 100 taka</li>
                <li>8 - may - 2023 - 10 taka</li>
                <li>8 - may - 2023 - 330 taka</li> */}
              </ul>
            </div>
            <div className="ExpenseHistory border border-black bg-blue-200">
              <h1 className="bg-blue-200 text-2xl text-center p-1 font-bold">
                Expense
              </h1>
              <ul className="p-2">
                {expe &&
                  expe.map((ele) => <li>8 - may - 2023 - {ele} taka</li>)}
                {/* <li>8 - may - 2023 - 100 taka</li>
                <li>8 - may - 2023 - 10 taka</li>
                <li>8 - may - 2023 - 330 taka</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
