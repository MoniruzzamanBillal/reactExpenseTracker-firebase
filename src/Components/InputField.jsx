import React from "react";
import { GlobalContext } from "./Context";

export default function InputField() {
  const {
    inc,
    exp,
    setInc,
    setExp,
    onUpdateClick,
    setSelectedDate,
    selectedDate,
  } = GlobalContext();
  return (
    <>
      <div className="inputFieldContainer mb-1 w-1/2 m-auto ">
        <div className="inputFieldWrapper m-auto bg-gray-200 border border-gray-200 rounded-sm shadow  flex justify-center">
          <div className="section2 w-11/12">
            <div className="incomeSection mb-4 pt-6">
              <label
                htmlFor="first_name"
                className="block mb-2 text-3xl font-medium text-black"
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
                onWheel={(e) => e.target.blur()}
              />
            </div>

            <div className="ExpenseSection mb-4">
              <label
                htmlFor="first_name"
                className="block mb-2 text-3xl font-medium text-black"
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
                onWheel={(e) => e.target.blur()}
              />
            </div>

            <div className="Date mb-4">
              <label
                htmlFor="date"
                className="block mb-2 text-2xl font-medium text-black"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-sm block w-11/12 p-2.5 "
                onChange={(e) => setSelectedDate(e.target.value)}
                value={selectedDate}
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
