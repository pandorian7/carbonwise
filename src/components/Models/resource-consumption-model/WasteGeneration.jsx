import React from "react";

import { ModelEntry } from "@/components/ui/model/Model";
import TickScale from "@/components/ui/model/TickScale";
import { ModelEntryContainer } from "@/components/ui/model/Model";
import { Input } from "@/components/ui/input";
import ToggleGroup from "@/components/ui/ToggleGroup";
import { SelectExt } from "@/components/ui/select";
import { IconButton } from "@/components/ui/Button";
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
        "Landfilled": "Landfill",
        // incineration: "Incineration",
        "Recycled": "Recycling",
        "Composted": "Composting",
        "Combusted": "Combusting"
        // reuse: "Reuse",
        // digestion: "Anaerobic Digestion",
        // recovery: "Advanced Recovery"
    }
  };
  return (
    <>
      {/* <ModelEntry title={"Waste Category"}>
        <SelectExt placeholder="Waste Category" items={items.waste} widthClass="w-38"/>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["kg", "tons"]} selected={"kg"} />
        </ModelEntryContainer>
      </ModelEntry>
      <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add waste stream
      </IconButton> */}

      <ModelEntry title={"Waste Selection"}>
        <div className="flex flex-col gap-3">
          <SelectExt placeholder="Waste Category" items={items.waste} widthClass="w-38"/>
        <SelectExt placeholder="Disposal Method" items={items.disposal} widthClass="w-38"/>
        </div>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["kg", "tons"]} selected={"kg"} />
        </ModelEntryContainer>
      </ModelEntry>
      {/* <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add disposal method
      </IconButton>
      <ModelEntry title={"Waste Management Costs (monthly)"}>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["/kg", "/ton"]} selected={"/kg"} />
        </ModelEntryContainer>
      </ModelEntry> */}
    </>
  );
}

export default WasteGeneration;
