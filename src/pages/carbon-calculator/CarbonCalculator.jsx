import React from "react";
import { PlusIcon } from "lucide-react";
import Tab from "../../components/ui/Tab";
import { Button, IconButton } from "@/components/ui/Button";
import ActiveCalculation from "./ActiveCalculation";
import SavedDrafts from "./SavedDrafts";
import useBooleanSelector from "@/hooks/useBooleanSelector";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import api from "@/lib/api";
import { setupCarbonWiseDB, useReportsDB } from "@/hooks/useReportsDB";
import { useEffect } from "react";

// const Models = () => {

//   const ModelBtn = ({ Model, children }) => (
//     <Button variant="secondary" onClick={() => showModel(<Model />)}>{children}</Button>
//   );

//   return (
//     <>
//       <Overlay ref={overlayRef} />
//       <div className="p-6 w-full gap-2 flex">
//         <ModelBtn Model={EnergyModel}>Energy</ModelBtn>
//         <ModelBtn Model={TranspotationModel}>Transpotation</ModelBtn>
//         <ModelBtn Model={ResourceConsumptionModel}>Resource Consumption</ModelBtn>
//       </div>
//     </>
//   );
// };

function CarbonCalculator() {
  const [active, drafts, setTab, selectedTab] = useBooleanSelector(2, 1);

  useEffect(() => {
    setupCarbonWiseDB();
  }, []);

  const { addReport } = useReportsDB();

  const addBehaviour = (n) => {
    return { onClick: () => setTab(n), active: selectedTab == n };
  };

  const [reportName, setReportName] = useState("");

  const generateReport = async () => {
    if (!reportName.trim()) {
      toast.error("Report Name Required");
      return;
    }

    const emissionData = await api.emissionEntries.get();
    const recommendations = await api.recommendations.get();

    const record = {
      title: reportName,
      emission: { energy: 0, transport: 0, water: 0, waste: 0, other: 0 },
      recommendation: {
        count: recommendations.length,
        finantialCost: 0,
        implementationCost: 0,
      },
    };

    for (let i = 0; i < emissionData.length; i++) {
      const element = emissionData[i];
      if (element.type == "Energy") {
        record.emission.energy += element.co2Emission;
      } else if (element.type == "Transport") {
        record.emission.transport += element.co2Emission;
      } else if (element.type == "Water") {
        record.emission.water += element.co2Emission;
      } else if (element.type == "Waste") {
        record.emission.waste += element.co2Emission;
      } else {
        record.emission.other += element.co2Emission;
      }
    }

    for (let i = 0; i < recommendations.length; i++) {
      const element = recommendations[i];
      record.recommendation.finantialCost += element.financialImpact;
      record.recommendation.implementationCost += element.implementationCost;
    }
    addReport({ ...record, date: new Date().toISOString().split("T")[0] }).then(
      () => toast.success("Report Created")
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="self-stretch px-6 bg-base-background border-b border-base-border inline-flex justify-start items-center gap-6">
        <div className="flex-1 flex justify-start items-center gap-2">
          <Tab title="Active Calculation" {...addBehaviour(1)} />
          <Tab title="Saved Drafts" count={3} {...addBehaviour(2)} />
          {/* <Tab title="Models" {...addBehaviour(3)} /> */}
        </div>
        {/* <IconButton Icon={PlusIcon} variant="defaultOutlined">
          New Calculation
        </IconButton> */}
      </div>
      {active && (
        <ActiveCalculation
          reportName={reportName}
          setReportName={setReportName}
        />
      )}
      {drafts && <SavedDrafts />}
      {/* {models && <Models />} */}
      <div className="w-full max-w-[1280px] p-6 inline-flex justify-end items-start gap-4">
        <Button variant="secondaryOutlined">Save for Later</Button>
        <Button onClick={generateReport}>Generate Intelligence Report</Button>
      </div>
    </>
  );
}

export default CarbonCalculator;
