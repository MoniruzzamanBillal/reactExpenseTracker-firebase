import React from "react";
import DataShow from "../Components/DataShow";
import InputField from "../Components/InputField";
import RecentAdd from "../Components/RecentAdd";

export default function Home() {
  return (
    <>
      <div className="homeContainer bg-slate-100 w-10/12 m-auto ">
        <DataShow />
        <RecentAdd />
        <InputField />
      </div>
    </>
  );
}
