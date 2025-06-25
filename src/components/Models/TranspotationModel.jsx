import React from "react";
import Model, { ModelEntry, ModelEntryContainer } from "../ui/model/Model";
import TickScale from "../ui/model/TickScale";
import { Input } from "../ui/input";
import ToggleGroup from "../ui/ToggleGroup";
import { IconButton } from "../ui/Button";
import { PlusIcon } from "lucide-react";
import { SelectExt } from "../ui/select";

import { Slider } from "@/components/ui/slider";
import Scale from "../ui/model/Scale";

import IATA_Codes from './IATA_CODES.json'

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
          <ToggleGroup options={["kg", "litre"]} selected={"litre"} />
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Business Air Travel (monthly) :"}>
        <div className="flex flex-col gap-2">
          <SelectExt
            widthClass="w-58"
            placeholder="Start"
            items={IATA_Codes}
          />
          <SelectExt
            widthClass="w-58"
            placeholder="End"
            items={IATA_Codes}
          />
        </div>
        {/* <TickScale /> */}


        <div className="flex-1 inline-flex flex-col justify-start items-start">
      <div className="self-stretch h-10 flex flex-col justify-center items-center gap-2">
        <div className="self-stretch bg-base-secondary rounded-full flex flex-col justify-start items-start gap-2.5">
          <Slider />
        </div>
      </div>
      <span>Number of Passengers</span>
      {/* <Scale
        ticks={6}
        start={0}
        step={1}
        mapper={(i) => `${i}${i ? "K" : ""}`}
      /> */}
    </div>


        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          {/* <ToggleGroup options={["hrs", "kms"]} selected={"hrs"} /> */}
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Employee Commuting (monthly) :"}>
        <SelectExt widthClass="w-28" placeholder="Medium" items={{bus: "Bus", train: "Train"}}/>
        <TickScale />
        <ModelEntryContainer>
          <Input disabled className="w-24 disabled:bg-base-background" />
          <ToggleGroup options={["mi", "km"]} selected={"km"} />
        </ModelEntryContainer>
      </ModelEntry>
      {/* <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add a new commute method
      </IconButton> */}
    </Model>
  );
}

export default TranspotationModel;
