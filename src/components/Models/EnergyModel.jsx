import React from "react";
import Model, { ModelEntry, ModelEntryContainer } from "../ui/model/Model";
import TickScale from "../ui/model/TickScale";
import { Input } from "../ui/input";
import ToggleGroup from "../ui/ToggleGroup";
import { useState } from "react";
import api from "@/lib/api";
import { getUser } from "@/lib/auth";
import { toast } from "react-toastify";

function EnergyModel({onClose}) {
  const description =
    "Energy typically represents 30-45% of a business's carbon footprint\
            and offers significant cost-saving potential. Provide as many\
            details as available—estimates are perfectly acceptable.";

  const [elecUsage, setElecUsage] = useState(0)
  const [elecUnit, setElecUnit] = useState("kWh")
  const [gasUsage, setGasUsage] = useState(0)
  const [gasUnit, setGasUnit] = useState("MMBtu")

  const submit = () => {
    const dataelec = {
      type: "Energy",
      data: "Electricity Usage",
      amount: elecUsage[0],
      unit: elecUnit,
      date: new Date().toISOString().slice(0, 10),
    }

    const datagas = {
      type: "Energy",
      data: "Natural Gas",
      amount: gasUsage[0],
      unit: gasUnit,
      date: new Date().toISOString().slice(0, 10),
    }

    api.emissionEntries.save([dataelec, datagas]).then(()=> toast.success("Saved Successfully")).catch(()=> toast.error("Something Went Wrong"))
    // toast.success("test")
  }

  return (
    <Model title={"Energy Consumption Details"} description={description} onClose={onClose} onSubmit={submit}>
      <ModelEntry title={"Electricity Usage (monthly) :"}>
        <TickScale value={elecUsage} setvalue={setElecUsage} />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" value={elecUsage}/>
          <ToggleGroup options={["kWh", "MWh"]} selected={"kWh"} onChange={setElecUnit}/>
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Natural Gas (monthly) :"}>
        <TickScale value={gasUsage} setvalue={setGasUsage}/>
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" value={gasUsage}/>
          <ToggleGroup options={["therms", "MMBtu"]} selected={"MMBtu"} onChange={setGasUnit}/>
        </ModelEntryContainer>
      </ModelEntry>
    </Model>
  );
}

export default EnergyModel;
