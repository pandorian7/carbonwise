import React from "react";
import Model from "../ui/model/Model";
import Tab from "../ui/Tab";
import useBooleanSelector from "@/hooks/useBooleanSelector";

import MaterialConsumption from "./resource-consumption-model/MaterialConsumption";
import WaterManagement from "./resource-consumption-model/WaterManagement";
import WasteGeneration from "./resource-consumption-model/WasteGeneration";
import { useImmer } from "use-immer";

import set from "lodash/set";
import api from "@/lib/api";
import { getUser } from "@/lib/auth";

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

  const submit = async () => {
    const records = [];

    if (state.material.raw.type) {
      // records.push({
      //   type: "Material",
      //   data: state.material.raw.type,
      //   amount: state.material.raw.amount[0],
      //   unit: state.material.raw.unit,
      //   date: new Date().toISOString().slice(0, 10),
      //   user: getUser(),
      // });
    }

    if (state.material.packaging.type) {
      // records.push({
      //   type: "Material",
      //   data: state.material.packaging.type,
      //   amount: state.material.packaging.amount[0],
      //   unit: state.material.packaging.unit,
      //   date: new Date().toISOString().slice(0, 10),
      //   user: getUser(),
      // });
    }

    if (state.water.source) {
      // records.push({
      //   type: "Water",
      //   data: state.water.source,
      //   amount: state.water.amount[0],
      //   unit: state.water.unit,
      //   date: new Date().toISOString().slice(0, 10),
      //   user: getUser(),
      // });
    }

    if (state.waste.category && state.waste.disposal) {
      records.push({
        type: "Waste",
        data: `${state.waste.category};${state.waste.disposal}`,
        amount: state.waste.amount[0],
        unit: state.waste.unit,
        date: new Date().toISOString().slice(0, 10),
        user: getUser(),
      });
    }
    

    console.log(records);

    api.emissionEntries.save(records);
    // {
    //   type: "Energy",
    //   data: "Natural Gas",
    //   amount: gasUsage[0],
    //   unit: gasUnit,
    //   date: new Date().toISOString().slice(0, 10),
    //   user: getUser()
    // }
  };

  const prefixUpdate = (prefix) => (path) => update(`${prefix}.${path}`);

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
      onSubmit={submit}
    >
      <div className="flex-1 flex justify-start items-center gap-2">
        <Tab title="Materials Consumption" {...addBehaviour(1)} />
        <Tab title="Water Management" {...addBehaviour(2)} />
        <Tab title="Waste Generation" {...addBehaviour(3)} />
      </div>
      {materials && (
        <MaterialConsumption
          state={state.material}
          update={prefixUpdate("material")}
        />
      )}
      {water && (
        <WaterManagement state={state.water} update={prefixUpdate("water")} />
      )}
      {waste && (
        <WasteGeneration state={state.waste} update={prefixUpdate("waste")} />
      )}
    </Model>
  );
}

export default ResourceConsumptionModel;
