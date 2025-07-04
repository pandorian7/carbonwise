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

import IATA_Codes from "./IATA_CODES.json";
import { useState } from "react";
import api from "@/lib/api";
import { getUser } from "@/lib/auth";

function TranspotationModel({ onClose }) {
  const [fuelType, setFuelType] = useState("Diesel");
  const [fuelUsage, setFuelUsage] = useState(0);
  const [fuelUnit, setFuelUnit] = useState("litre");

  const [BATFrom, setBATFrom] = useState("CMB");
  const [BATTo, setBATTo] = useState("LHR");
  const [nPassengers, setNPassengers] = useState(0);

  const [employeeCommutingMedium, setEmployeeCommutingMedium] = useState("Car-Type-Mini");
  const [employeeCommuting, setEmployeeCommuting] = useState(0);
  const [employeeCommutingUnit, setEmployeeCommutingUnit] = useState("km");

  const createRequestBody = () => {
    return [
      {
        data: "Fuel Usage",
        type: "transport",
        method: fuelType,
        unit: fuelUnit,
        amount: fuelUsage[0],
        date: new Date().toISOString().slice(0, 10),
      },
      {
        data: "Business Air Travel",
        type: "transport",
        iataAirportFrom: BATFrom,
        iataAirportTo: BATTo,
        numberOfPassengers: nPassengers[0],
        date: new Date().toISOString().slice(0, 10),
      },
      {
        data: "Employee Commuting",
        type: "transport",
        method: employeeCommutingMedium,
        unit: employeeCommutingUnit,
        amount: employeeCommuting[0],
        date: new Date().toISOString().slice(0, 10),
      },
    ];
  };

  const submit = () => {
    const bodies = createRequestBody();
    api.emissionEntries.save(bodies).then(()=> toast.success("Saved Successfully")).catch(()=> toast.error("Something Went Wrong"))
  };

  const description =
    "Transportation emissions often represent untapped cost savings opportunities \
    and are increasingly scrutinized by stakeholders. Your responses will highlight \
    efficiency opportunities in your operations.";

  return (
    <Model
      title={"Transportation & Travel Details"}
      description={description}
      onClose={onClose}
      onSubmit={submit}
    >
      <ModelEntry title={"Company Fleet Fuel Usage (monthly) :"}>
        <SelectExt
          onChange={setFuelType}
          widthClass="w-38"
          placeholder="Fuel Type"
          items={{
            "Premium Petrol": "Premium Petrol",
            "Regular Petrol": "Regular Petrol",
            Diesel: "Diesel",
            LPG: "LPG",
          }}
        />
        <TickScale value={fuelUsage} setvalue={setFuelUsage} />
        <ModelEntryContainer>
          <Input
            disabled
            className="w-24 disabled:bg-base-background"
            value={fuelUsage}
          />
          <ToggleGroup
            options={["kg", "litre"]}
            selected={"litre"}
            onChange={setFuelUnit}
          />
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Business Air Travel (monthly) :"}>
        <div className="flex flex-col gap-2">
          <SelectExt
            onChange={setBATFrom}
            widthClass="w-58"
            placeholder="Start"
            items={IATA_Codes}
          />
          <SelectExt
            onChange={setBATTo}
            widthClass="w-58"
            placeholder="End"
            items={IATA_Codes}
          />
        </div>
        {/* <TickScale /> */}

        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch h-10 flex flex-col justify-center items-center gap-2">
            <div className="self-stretch bg-base-secondary rounded-full flex flex-col justify-start items-start gap-2.5">
              <Slider
                defaultValue={[nPassengers]}
                onValueChange={setNPassengers}
              />
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
          <Input
            disabled
            className="w-24 disabled:bg-base-background"
            value={nPassengers}
          />
          {/* <ToggleGroup options={["hrs", "kms"]} selected={"hrs"} /> */}
        </ModelEntryContainer>
      </ModelEntry>
      <ModelEntry title={"Employee Commuting (monthly) :"}>
        <SelectExt
          widthClass="w-28"
          placeholder="Medium"
          items={{
            "Car-Type-Mini": "Mini Car",
            "Car-Type-Supermini": "Supermini Car",
            "Car-Type-LowerMedium": "Lower Medium Car",
            "Car-Type-UpperMedium": "Upper Medium Car",
            "Car-Type-Executive": "Executive Car",
            "Car-Type-Luxury": "Luxury Car",
            "Car-Type-Sports": "Sports Car",
            "Car-Type-4x4": "4x4 Vehicle",
            "Car-Type-MPV": "Multi-Purpose Vehicle (MPV)",
            "Car-Size-Small": "Small Car",
            "Car-Size-Medium": "Medium Car",
            "Car-Size-Large": "Large Car",
            "Car-Size-Average": "Average Size Car",
            "Motorbike-Size-Small": "Small Motorbike",
            "Motorbike-Size-Medium": "Medium Motorbike",
            "Motorbike-Size-Large": "Large Motorbike",
            "Motorbike-Size-Average": "Average Size Motorbike",
            "Bus-LocalAverage": "Local Bus (Average Size)",
            "Bus-Coach": "Coach Bus",
            "Taxi-Local": "Local Taxi",
            "Train-National": "National Train",
            "Train-Local": "Local Train",
            "Train-Tram": "Tram",
          }}
          onChange={setEmployeeCommutingMedium}
        />
        <TickScale setvalue={setEmployeeCommuting} value={employeeCommuting}/>
        <ModelEntryContainer>
          <Input
            disabled
            className="w-24 disabled:bg-base-background"
            value={employeeCommuting}
          />
          <ToggleGroup
            options={["mi", "km"]}
            selected={"km"}
            onChange={setEmployeeCommutingUnit}
          />
        </ModelEntryContainer>
      </ModelEntry>
      {/* <IconButton Icon={PlusIcon} variant="secondaryOutlined">
        Add a new commute method
      </IconButton> */}
    </Model>
  );
}

export default TranspotationModel;
