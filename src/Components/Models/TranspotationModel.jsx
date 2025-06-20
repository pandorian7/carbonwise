import React from "react";
import Model, { ModelEntry, ModelEntryContainer } from "../ui/model/Model";
import TickScale from "../ui/model/TickScale";
import { Input } from "../ui/input";
import ToggleGroup from "../ui/ToggleGroup";
import { IconButton } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { SelectExt } from "../ui/select";

function TranspotationModel({ onClose }) {
  const description =
    "Transportation emissions often represent untapped cost savings opportunities \
    and are increasingly scrutinized by stakeholders. Your responses will highlight \
    efficiency opportunities in your operations.";

  return (
    <Model
      title={"Transportation & Travel Details"}
      description={description}
      onClose={onClose}
    >
      <ModelEntry title={"Company Fleet Fuel Usage (monthly) :"}>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["Gallons", "Liters"]} selected={"Gallons"} />
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Business Air Travel (monthly) :"}>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["hrs", "kms"]} selected={"hrs"} />
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Employee Commuting (monthly) :"}>
        <SelectExt widthClass="w-28" placeholder="Medium" items={{bus: "Bus", train: "Train"}}/>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["hrs", "kms"]} selected={"hrs"} />
        </ModelEntryContainer>
      </ModelEntry>
      <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add a new commute method
      </IconButton>
    </Model>
  );
}

export default TranspotationModel;
