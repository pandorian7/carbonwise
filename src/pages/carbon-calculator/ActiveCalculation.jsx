import React from "react";

import { IconButton } from "@/components/ui/Button";
import { PlusIcon, SparklesIcon} from "lucide-react";

function ActiveCalculation() {
  return (
    <div className="w-full max-w-[1280px] p-6 inline-flex justify-start items-start gap-6 flex-wrap content-start">
      <div className="flex-1 max-w-[680px] min-w-96 inline-flex flex-col justify-start items-start gap-4">
        <div className="self-stretch pl-4 inline-flex justify-start items-center gap-2">
          <div className="justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
            Report Name:
          </div>
          <div className="flex-1 px-3 py-2 bg-white/5 rounded-lg outline  outline-offset-[-1px] outline-white/20 flex justify-start items-center gap-2">
            <div className="flex-1 justify-start text-gray-300/40 text-base font-medium font-['Plus_Jakarta_Sans'] leading-tight">
              [Company Name] Carbon Assessment - [Date]
            </div>
          </div>
        </div>
        <div className="self-stretch px-5 py-4 rounded-2xl outline  outline-offset-[-1px] outline-base-border inline-flex justify-end items-center gap-3">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
              Energy Consumption
            </div>
            <div className="self-stretch justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">
              Enter electricity, gas, and other energy sources that power your
              operations.
            </div>
          </div>
          <IconButton Icon={PlusIcon} variant="secondaryOutlined">
            Add Details
          </IconButton>
        </div>
        <div className="self-stretch px-5 py-4 rounded-2xl outline  outline-offset-[-1px] outline-base-border inline-flex justify-start items-center gap-3">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
              Transportation & Travel
            </div>
            <div className="self-stretch justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">
              Include fleet vehicles, business travel, and employee commuting
              data.
            </div>
          </div>
          <IconButton Icon={PlusIcon} variant="secondaryOutlined">
            Add Details
          </IconButton>
        </div>
        <div className="self-stretch px-5 py-4 rounded-2xl outline  outline-offset-[-1px] outline-base-border inline-flex justify-start items-center gap-3">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
              Resource Consumption
            </div>
            <div className="self-stretch justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">
              Capture materials, water usage, and waste management practices.
            </div>
          </div>
          <IconButton Icon={PlusIcon} variant="secondaryOutlined">
            Add Details
          </IconButton>
        </div>
        <div className="self-stretch py-4 rounded-2xl inline-flex justify-start items-center gap-3">
          <div className="flex-1 px-2 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-white text-base font-semibold font-['Plus_Jakarta_Sans'] leading-tight">
              Need Help Estimating?
            </div>
            <div className="self-stretch justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">
              Capture materials, water usage, and waste management practices.
            </div>
          </div>
          <IconButton Icon={SparklesIcon} variant="secondary">
            Get Smart Defaults
          </IconButton>
        </div>
      </div>
      <div className="flex-1 max-w-[480px] min-w-96 pl-6 border-l inline-flex flex-col justify-start items-center gap-6">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="flex-1 justify-start text-white text-base font-semibold font-['Plus_Jakarta_Sans'] leading-tight">
            Carbon Assessment:
          </div>
          <div
            data-state="Default"
            data-variant="Secondary"
            className="px-2.5 py-0.5 bg-base-secondary rounded-full outline  outline-offset-[-1px] outline-tailwind-colors-base-transparent/0 flex justify-center items-center gap-2.5"
          >
            <div className="justify-start text-base-secondary-foreground text-xs font-semibold font-['Inter'] leading-none">
              Live Preview
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="flex-1 justify-start text-base-muted-foreground text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
            Estimated Carbon Footprint:
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="flex-1 justify-start text-base-muted-foreground text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
            Equivalent to:
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="flex-1 justify-start text-base-muted-foreground text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
            Industry Standing:
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch min-w-80 flex flex-col justify-start items-start gap-3">
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="flex-1 justify-start text-base-muted-foreground text-sm font-medium font-['Inter'] leading-tight">
                Current Footprint Breakdown:
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveCalculation;
