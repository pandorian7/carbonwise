import React from "react";
import Model from "../ui/model/Model";
import Tab from "../ui/Tab";
import useBooleanSelector from "@/hooks/useBooleanSelector";

import MaterialConsumption from "./resource-consumption-model/MaterialConsumption";
import WaterManagement from "./resource-consumption-model/WaterManagement";
import WasteGeneration from "./resource-consumption-model/WasteGeneration";
import { useImmer } from "use-immer";

import set from "lodash/set";

function ResourceConsumptionModel({ onClose }) {
  const [materials, water, waste, setTab, selectedTab] = useBooleanSelector(
    3,
    1
  );

  const [state, setState] = useImmer({
    material: {
      raw: {
        type: "",
        amount: [0],
        unit: "kg",
      },
      packaging: {
        type: "",
        amount: [0],
        unit: "hrs",
      },
    },
    water: {
      source: "",
      amount: [0],
      unit: "m3",
    },
    waste: {
      category: "",
      disposal: "",
      amount: [0],
      unit: "kg",
    },
  });

  const update = (path) => (val) => {
    setState((draft) => {
      set(draft, path, val);
    });
  };

  const prefixUpdate = (prefix) => (path) => update(`${prefix}.${path}`)

  const description =
    "Resource efficiency directly impacts both environmental footprint and \
    operational costs. These inputs help identify circular economy opportunities \
    specific to your operations.";

  const addBehaviour = (n) => {
    return { onClick: () => setTab(n), active: selectedTab == n };
  };

  return (
    <Model
      title={"Resource Consumption Details"}
      description={description}
      onClose={onClose}
    >
      <div className="flex-1 flex justify-start items-center gap-2">
        <Tab title="Materials Consumption" {...addBehaviour(1)} />
        <Tab title="Water Management" {...addBehaviour(2)} />
        <Tab title="Waste Generation" {...addBehaviour(3)} />
      </div>
      {materials && <MaterialConsumption state={state.material} update={prefixUpdate('material')}/>}
      {water && <WaterManagement state={state.water} update={prefixUpdate('water')}/>}
      {waste && <WasteGeneration state={state.waste} update={prefixUpdate('waste')}/>}
    </Model>
  );
}

export default ResourceConsumptionModel;
