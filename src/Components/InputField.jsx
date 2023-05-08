import React from "react";

export default function InputField() {
  return (
    <>
      <div className="inputFieldContainer mb-1 w-10/12 m-auto ">
        <div className="inputFieldWrapper m-auto bg-orange-400  border border-black flex justify-center">
          <div className="section2 w-1/2">
            <div className="incomeSection mb-4">
              <label
                for="first_name"
                className="block mb-1 text-3xl font-medium text-black"
              >
                Income
              </label>
              <input
                type="number"
                id="first_name"
                className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-sm block w-11/12 p-2.5 "
                placeholder="Income"
                required
              />
            </div>

            <div className="ExpenseSection">
              <label
                for="first_name"
                className="block mb-1 text-3xl font-medium text-black"
              >
                Expense
              </label>
              <input
                type="number"
                id="first_name"
                className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-sm block w-11/12 p-2.5 "
                placeholder="Income"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
