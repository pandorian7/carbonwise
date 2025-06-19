import React from "react";

import Sidebar from "../../Components/Sidebar";
import CarbonCalculator from "../../Components/CarbonCalculator";
import useBooleanSelector from "../../hooks/useBooleanSelector";

function ActiveCalculation() {
  const [
    dashboard,
    calculator,
    recommendations,
    reports,
    settings,
    changeView,
    activeView,
  ] = useBooleanSelector(5, 1);
  return (
    <div className="w-full h-[100vh] px-2 pt-2 bg-base-sidebar-background inline-flex justify-start items-start overflow-hidden">
      <Sidebar activeView={activeView} changeView={(n)=>(()=>changeView(n))}/>
      {calculator && <CarbonCalculator />}
    </div>
  );
}

export default ActiveCalculation;
