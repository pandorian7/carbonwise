import React from "react";

import { ModelEntry } from "@/components/ui/model/Model";
import TickScale from "@/components/ui/model/TickScale";
import { ModelEntryContainer } from "@/components/ui/model/Model";
import { Input } from "@/components/ui/input";
import ToggleGroup from "@/components/ui/ToggleGroup";
import { SelectExt } from "@/components/ui/select";
import { IconButton } from "@/components/ui/Button";
import { PlusIcon } from "lucide-react";

function WasteGeneration({ state, update }) {
  const items = {
    waste: {
      "General Waste": "General Waste",
      "Paper/Cardboard": "Paper/Cardboard",
      "Plastic": "Plastics",
      "Organic/Food": "Organic/Food",
      "Glass": "Glass",
      "Electronic": "Electronic",
      // hazard: "Hazardous",
      "Construction": "Construction",
      "Other": "Other",
    },
    disposal: {
      Landfilled: "Landfill",
      // incineration: "Incineration",
      Recycled: "Recycling",
      Composted: "Composting",
      Combusted: "Combusting",
      // reuse: "Reuse",
      // digestion: "Anaerobic Digestion",
      // recovery: "Advanced Recovery"
    },
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
          <SelectExt
            placeholder="Waste Category"
            items={items.waste}
            widthClass="w-38"
            onChange={update("category")}
          />
          <SelectExt
            placeholder="Disposal Method"
            items={items.disposal}
            widthClass="w-38"
            onChange={update("disposal")}
          />
        </div>
        <TickScale setvalue={update("amount")}/>
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" value={state.amount[0]}/>
          <ToggleGroup options={["kg", "tons"]} selected={"kg"} onChange={update("unit")}/>
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
