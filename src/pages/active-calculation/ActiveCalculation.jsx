import React from "react";

import Sidebar from "../../Components/Sidebar";
import CarbonCalculator from "../../Components/CarbonCalculator";


function ActiveCalculation() {
  return (
    <div className="w-full h-[100vh] px-2 pt-2 bg-base-sidebar-background inline-flex justify-start items-start overflow-hidden">
      <Sidebar /> 
      <CarbonCalculator />
    </div>
  );
}

export default ActiveCalculation;
