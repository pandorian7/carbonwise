import React from "react";
import Model, { ModelEntry, ModelEntryContainer } from "../ui/model/Model";
import TickScale from "../ui/model/TickScale";
import { Input } from "../ui/input";
import ToggleGroup from "../ui/ToggleGroup";

function EnergyModel() {
  const description =
    "Energy typically represents 30-45% of a business's carbon footprint\
            and offers significant cost-saving potential. Provide as many\
            details as available—estimates are perfectly acceptable.";

  return (
    <Model title={"Energy Consumption Details"} description={description}>
      <ModelEntry title={"Electricity Usage (monthly) :"}>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background"/>
          <ToggleGroup options={["kWh", "MWh"]} selected={"kWh"}/>
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Natural Gas (monthly) :"}>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background"/>
          <ToggleGroup options={["therms", "MMBtu"]} selected={"MMBtu"}/>
        </ModelEntryContainer>
      </ModelEntry>
    </Model>
  );
}

export default EnergyModel;
