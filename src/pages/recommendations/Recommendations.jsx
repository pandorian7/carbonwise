import React from "react";

import useBooleanSelector from "@/hooks/useBooleanSelector";
import Tab from "@/components/ui/Tab";
import RecommendationsTab from "./RecommendationsTab";
import ActionPlanTab from "./ActionPlanTab";
import api from "@/lib/api";

function Recommendations() {


  const [recommendations, actionPlan, setTab, selectedTab] = useBooleanSelector(
    2,
    1
  );

  const addBehaviour = (n) => {
    return { onClick: () => setTab(n), active: selectedTab == n };
  };

  return (
    <>
      <div className="self-stretch px-6 bg-base-background border-b border-base-border inline-flex justify-start items-center gap-6">
        <div className="flex-1 flex justify-start items-center gap-2">
          <Tab title="Recommendations" {...addBehaviour(1)} />
          <Tab title="Action Plan" {...addBehaviour(2)} />
        </div>
      </div>
      {recommendations && <RecommendationsTab />}
      {actionPlan && <ActionPlanTab />}
    </>
  );
}

export default Recommendations;
