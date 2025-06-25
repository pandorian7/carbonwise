import React from "react";

import { Progress } from "@/components/ui/progress"
import { IconButton } from "@/components/ui/button";
import { PlusIcon, SparklesIcon } from "lucide-react";

function Card({
  title = "Title",
  subtitle = "Subtitle",
  progress = 50,
  onClick = () => {},
}) {
  return (
    <div className="self-stretch px-5 py-4 rounded-2xl outline outline-offset-[-1px] outline-base-border inline-flex justify-end items-center gap-3">
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
        <div className="self-stretch justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
          {title}
        </div>
        <div className="self-stretch justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">
          {subtitle}
        </div>
      </div>
      <Progress value={progress} className="w-48"/>
      <div className="w-24 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">
        {progress}% Complete
      </div>
      <IconButton Icon={PlusIcon} variant="secondaryOutlined">
            Add Details
          </IconButton>
    </div>
  );
}

function SavedDrafts() {
  return (
    <div className="w-full max-w-[1280px] p-6 inline-flex justify-start items-start gap-6 flex-wrap content-start">
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
        <Card title="[Company Name] Carbon Assessment - [Date]" subtitle="13-06-2025" progress={25}/>
        <Card title="[Company Name] Carbon Assessment - [Date]" subtitle="13-06-2025" progress={50}/>
        <Card title="[Company Name] Carbon Assessment - [Date]" subtitle="13-06-2025" progress={75}/>
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
    </div>
  );
}

export default SavedDrafts;
