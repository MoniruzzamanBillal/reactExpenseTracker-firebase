import React from "react";
import { GlobalContext } from "./Context";

export default function InputField() {
  const { inc, exp, setInc, setExp, onUpdateClick } = GlobalContext();
  return (
    <>
      <div className="inputFieldContainer mb-1 w-10/12 m-auto ">
        <div className="inputFieldWrapper m-auto bg-orange-400  border border-black flex justify-center">
          <div className="section2 w-1/2">
            <div className="incomeSection mb-4">
              <label
                htmlFor="first_name"
                className="block mb-1 text-3xl font-medium text-black"
              >
                Income
              </label>
              <input
                type="number"
                id="first_name"
                className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-sm block w-11/12 p-2.5 "
                placeholder="Income"
                value={inc}
                onChange={(e) => setInc(e.target.value)}
                required
              />
            </div>

            <div className="ExpenseSection">
              <label
                htmlFor="first_name"
                className="block mb-1 text-3xl font-medium text-black"
              >
                Expense
              </label>
              <input
                type="number"
                id="first_name"
                className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-sm block w-11/12 p-2.5 "
                placeholder="Income"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                required
              />
            </div>

            <button
              className="py-2.5 mt-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 "
              onClick={() => onUpdateClick()}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
