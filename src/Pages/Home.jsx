import React from "react";
import DataShow from "../Components/DataShow";
import InputField from "../Components/InputField";
import RecentAdd from "../Components/RecentAdd";

export default function Home() {
  return (
    <>
      <div className="homeContainer w-10/12 m-auto bg-green-300 border border-black">
        <DataShow />
        <RecentAdd />
        <InputField />
      </div>
    </>
  );
}
