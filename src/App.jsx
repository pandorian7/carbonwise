import React from "react";

import Sidebar from "./components/Sidebar";
import CarbonCalculator from "./pages/carbon-calculator/CarbonCalculator";
import useBooleanSelector from "./hooks/useBooleanSelector";
import Dashboard from "./pages/dashboard/Dashboard";
import Breadcrumb from "./components/ui/Breadcrumb";
import { PanelLeftIcon } from "lucide-react";
import Recommendations from "./pages/recommendations/Recommendations";

import api from "./lib/api";
import { getUser } from "./lib/auth";

function App() {
  const titles = [
    "Dashboard",
    "Carbon Calculator",
    "Recommendations",
    "Reports & Analysis",
    "Settings",
  ];

  const [
    dashboard,
    calculator,
    recommendations,
    reports,
    settings,
    changeView,
    activeView,
  ] = useBooleanSelector(5, 1);

  const title = (index) => titles.at(index - 1);

  console.log(api.emissionEntries.get())
  console.log(getUser())

  return (
    <div className="w-full h-[100vh] px-2 pt-2 bg-base-sidebar-background inline-flex justify-start items-start overflow-hidden">
      <Sidebar
        activeView={activeView}
        changeView={(n) => () => changeView(n)}
      />
      <div className="flex-1 self-stretch min-w-[560px] bg-base-background rounded-tl-2xl rounded-tr-2xl inline-flex flex-col justify-start items-center overflow-hidden">
        <Breadcrumb title={title(activeView)} Icon={PanelLeftIcon} />
        <div className="w-full h-full flex flex-col overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-base-muted-foreground/80 scrollbar-track-base-sidebar-accent">
          {dashboard && <Dashboard />}
          {calculator && <CarbonCalculator />}
          {recommendations && <Recommendations/>}
        </div>
      </div>
    </div>
  );
}

export default App;
