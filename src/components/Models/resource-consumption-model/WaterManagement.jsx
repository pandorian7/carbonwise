import React from "react";

import { ModelEntry } from "@/components/ui/model/Model";
import { SelectExt } from "@/components/ui/select";
import TickScale from "@/components/ui/model/TickScale";
import { Input } from "@/components/ui/input";
import { ModelEntryContainer } from "@/components/ui/model/Model";
import ToggleGroup from "@/components/ui/ToggleGroup";
import { IconButton } from "@/components/ui/Button";
import { PlusIcon } from "lucide-react";

function WaterManagement() {
  const items = {
    consumption: {
      municipal: "Municipal Supply",
      groundwater: "Groundwater",
      surfacewater: "Surface Water",
      rainwater: "Rainwater Harvesting",
      recycled: "Recycled Water",
    },
    treatment: {
        municipal: "Municipal Treatment Plant",
        onsitePrimary: "On-site Primary Treatment",
        onsiteSecondary: "On-site Secondary Treatment",
        onsiteAdvanced: "On-site Advanced Treatment",
        directDischarge: "Direct Discharge (after compliance treatment)",
        none: "No Treatment"
    }
  };
  return (
    <>
      <ModelEntry title={"Total Water Consumption"}>
        <SelectExt
          placeholder="Primary Water Source"
          items={items.consumption}
          widthClass="w-46"
        />
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["m3", "Liters"]} selected={"m3"} />
        </ModelEntryContainer>
      </ModelEntry>
      <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add new source
      </IconButton>

      {/* <ModelEntry title={"Wastewater Treatment"}>
        <SelectExt
          placeholder="Treatment Type"
          items={items.treatment}
          widthClass="w-46"
        />
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["m3", "Liters"]} selected={"m3"} />
        </ModelEntryContainer>
      </ModelEntry> */}
      {/* <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add treatment type
      </IconButton> */}
    </>
  );
}

export default WaterManagement;
