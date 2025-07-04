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
import { toast } from "react-toastify";

function ResourceConsumptionModel({ onClose }) {
  const [materials, water, waste, setTab, selectedTab] = useBooleanSelector(
    3,
    1
  );

  const defaultState = {
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
  }

  const [state, setState] = useImmer(defaultState);

  const update = (path) => (val) => {
    setState((draft) => {
      set(draft, path, val);
    });
  };

  const submit = async () => {
    const records = [];

    if (state.material.raw.type) {
      records.push({
        type: "Material",
        data: state.material.raw.type,
        amount: state.material.raw.amount[0],
        unit: state.material.raw.unit,
        date: new Date().toISOString().slice(0, 10),
      });
    }

    if (state.material.packaging.type) {
      records.push({
        type: "Material",
        data: state.material.packaging.type,
        amount: state.material.packaging.amount[0],
        unit: state.material.packaging.unit,
        date: new Date().toISOString().slice(0, 10),
      });
    }

    if (state.water.source) {
      records.push({
        type: "Water",
        data: state.water.source,
        amount: state.water.amount[0],
        unit: state.water.unit,
        date: new Date().toISOString().slice(0, 10),
      });
    }

    if (state.waste.category && state.waste.disposal) {
      records.push({
        type: "Waste",
        data: `${state.waste.category};${state.waste.disposal}`,
        amount: state.waste.amount[0],
        unit: state.waste.unit,
        date: new Date().toISOString().slice(0, 10),
      });
    }
    
    if (!records.length) {
      toast.warning("No Changes Detected");
    } else {
      api.emissionEntries.save(records).then(()=> toast.success("Saved Successfully")).catch(()=> toast.error("Something Went Wrong"));
    }

    setState(defaultState);

    
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
