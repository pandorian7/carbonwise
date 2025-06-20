import React from "react";

import { ModelEntry } from "@/Components/ui/model/Model";
import TickScale from "@/Components/ui/model/TickScale";
import { ModelEntryContainer } from "@/Components/ui/model/Model";
import { Input } from "@/Components/ui/input";
import ToggleGroup from "@/Components/ui/ToggleGroup";
import { SelectExt } from "@/Components/ui/select";
import { IconButton } from "@/Components/ui/button";
import { PlusIcon } from "lucide-react";

function WasteGeneration() {
  const items = {
    waste: {
      general: "General Waste",
      paper: "Paper/Cardboard",
      plastics: "Plastics",
      organic_food: "Organic/Food",
      glass: "Glass",
      electronic: "Electronic",
      hazard: "Hazardous",
      construction: "Construction",
      "other": "Other"
    },
    disposal: {
        landfill: "Landfill",
        incineration: "Incineration",
        recyle: "Recycling",
        compost: "Composting",
        reuse: "Reuse",
        digestion: "Anaerobic Digestion",
        recovery: "Advanced Recovery"
    }
  };
  return (
    <>
      <ModelEntry title={"Waste Category"}>
        <SelectExt placeholder="Waste Category" items={items.waste} widthClass="w-38"/>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["kg", "tons"]} selected={"kg"} />
        </ModelEntryContainer>
      </ModelEntry>
      <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add waste stream
      </IconButton>

      <ModelEntry title={"Disposal Method"}>
        <SelectExt placeholder="Disposal Method" items={items.disposal} widthClass="w-38"/>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["kg", "tons"]} selected={"kg"} />
        </ModelEntryContainer>
      </ModelEntry>
      <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add disposal method
      </IconButton>
      <ModelEntry title={"Waste Management Costs (monthly)"}>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["/kg", "/ton"]} selected={"/kg"} />
        </ModelEntryContainer>
      </ModelEntry>
    </>
  );
}

export default WasteGeneration;
