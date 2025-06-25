import React from "react";

import { ModelEntry } from "@/components/ui/model/Model";
import TickScale from "@/components/ui/model/TickScale";
import { ModelEntryContainer } from "@/components/ui/model/Model";
import ToggleGroup from "@/components/ui/ToggleGroup";
import { Input } from "@/components/ui/input";
import { SelectExt } from "@/components/ui/select";
import { IconButton } from "@/components/ui/Button";
import { PlusIcon } from "lucide-react";

function MaterialConsumption() {
  return (
    <>
      <ModelEntry title={"Raw Materials Input"}>
        <SelectExt
          widthClass="w-50"
          placeholder="Material Type"
          items={{
            Steel: "Steel",
            Aluminium: "Aluminium",
            Plastic: "Plastic"
          }}
        />
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["kg", "MMBtu"]} selected={"kg"} />
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Packaging Materials"}>
        <SelectExt
          widthClass="w-50"
          placeholder="Material Type"
          items={{"Paper/Cardboard":"Paper/Cardboard",
            "Plastic (HDPE)": "Plastic (HDPE)",
            "Plastic (PET)":"Plastic (PET)",
            "Glass":"Glass",
            "Metal":"Metal",
            "Composite":"Composite",
            "Bio-based":"Bio-based",
            "Other": "Other"
          }}
        />
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["hrs", "kms"]} selected={"hrs"} />
        </ModelEntryContainer>
      </ModelEntry>
      <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add a new commute method
      </IconButton>
    </>
  );
}

export default MaterialConsumption;
