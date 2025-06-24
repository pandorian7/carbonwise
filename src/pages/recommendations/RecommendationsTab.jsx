import React from "react";

function RecommendationsTab() {
  return (
    <div className="self-stretch pt-4 inline-flex flex-col justify-start items-start">
  <div className="self-stretch px-6 py-4 flex flex-col justify-center items-center gap-2">
    <div className="self-stretch justify-start text-white text-xl font-semibold font-['Plus_Jakarta_Sans']">Immediate Opportunities</div>
    <div className="self-stretch justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">These measures can be implemented within 30 days with minimal investment</div>
  </div>
  <div className="w-full max-w-[1280px] px-6 pb-6 inline-flex justify-start items-start gap-6 flex-wrap content-start">
    <div className="flex-1 flex justify-start items-start gap-4">
      <div className="flex-1 max-w-96 min-w-72 p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-base-border inline-flex flex-col justify-center items-start gap-3 overflow-hidden">
        <div className="self-stretch justify-start text-white text-sm font-bold font-['Plus_Jakarta_Sans'] leading-tight">Switch to LED Lighting</div>
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Carbon Impact:</div>
            <div className="flex-1 max-w-28 text-right justify-start text-white text-xs font-normal font-['Plus_Jakarta_Sans'] leading-tight">45 tCO2e/year</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Financial Benefit:</div>
            <div className="flex-1 max-w-28 text-right justify-start text-white text-xs font-normal font-['Inter'] leading-tight">$32,500/year</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Payback Period:</div>
            <div className="flex-1 max-w-28 text-right justify-start text-white text-xs font-normal font-['Inter'] leading-tight">7 months</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Implementation Difficulty:</div>
            <div className="flex-1 max-w-24 inline-flex flex-col justify-start items-end gap-2">
              <div className="px-2 py-1 bg-white/10 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-black/0 inline-flex justify-center items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-700 rounded-full" />
                <div className="justify-start text-white text-xs font-normal font-['Inter'] leading-tight">Low</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch pt-6 inline-flex justify-start items-start gap-2">
          <div data-show-left-icon="false" data-show-right-icon="false" data-size="sm" data-state="Default" data-variant="Outline" className="flex-1 h-9 px-3 py-2 bg-base-background rounded-md outline outline-1 outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2">
            <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">View Details</div>
          </div>
          <div data-show-left-icon="true" data-show-right-icon="false" data-size="sm" data-state="Default" data-variant="Secondary" className="flex-1 h-9 px-3 py-2 bg-base-secondary rounded-md flex justify-center items-center gap-2">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-2.5 h-2.5 left-[3.33px] top-[3.33px] absolute bg-base-foreground border-[1.33px] border-base-secondary-foreground" />
            </div>
            <div className="justify-center text-base-secondary-foreground text-sm font-medium font-['Inter'] leading-tight">Add to Plan</div>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-96 min-w-72 p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-base-border inline-flex flex-col justify-center items-start gap-3 overflow-hidden">
        <div className="self-stretch justify-start text-white text-sm font-bold font-['Plus_Jakarta_Sans'] leading-tight">Switch to LED Lighting</div>
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Carbon Impact:</div>
            <div className="flex-1 max-w-28 text-right justify-start text-white text-xs font-normal font-['Inter'] leading-tight">45 tCO2e/year</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Financial Benefit:</div>
            <div className="flex-1 max-w-28 text-right justify-start text-white text-xs font-normal font-['Inter'] leading-tight">$32,500/year</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Payback Period:</div>
            <div className="flex-1 max-w-28 text-right justify-start text-white text-xs font-normal font-['Inter'] leading-tight">7 months</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Implementation Difficulty:</div>
            <div className="flex-1 max-w-24 inline-flex flex-col justify-start items-end gap-2">
              <div className="px-2 py-1 bg-white/10 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-black/0 inline-flex justify-center items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-700 rounded-full" />
                <div className="justify-start text-white text-xs font-normal font-['Inter'] leading-tight">Low</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch pt-6 inline-flex justify-start items-start gap-2">
          <div data-show-left-icon="false" data-show-right-icon="false" data-size="sm" data-state="Default" data-variant="Outline" className="flex-1 h-9 px-3 py-2 bg-base-background rounded-md outline outline-1 outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2">
            <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">View Details</div>
          </div>
          <div data-show-left-icon="true" data-show-right-icon="false" data-size="sm" data-state="Default" data-variant="Secondary" className="flex-1 h-9 px-3 py-2 bg-base-secondary rounded-md flex justify-center items-center gap-2">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-2.5 h-2.5 left-[3.33px] top-[3.33px] absolute bg-base-foreground border-[1.33px] border-base-secondary-foreground" />
            </div>
            <div className="justify-center text-base-secondary-foreground text-sm font-medium font-['Inter'] leading-tight">Add to Plan</div>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-96 min-w-72 p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-base-border inline-flex flex-col justify-center items-start gap-3 overflow-hidden">
        <div className="self-stretch justify-start text-white text-sm font-bold font-['Plus_Jakarta_Sans'] leading-tight">Switch to LED Lighting</div>
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Carbon Impact:</div>
            <div className="flex-1 max-w-28 text-right justify-start text-white text-xs font-normal font-['Inter'] leading-tight">45 tCO2e/year</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Financial Benefit:</div>
            <div className="flex-1 max-w-28 text-right justify-start text-white text-xs font-normal font-['Inter'] leading-tight">$32,500/year</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Payback Period:</div>
            <div className="flex-1 max-w-28 text-right justify-start text-white text-xs font-normal font-['Inter'] leading-tight">7 months</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="flex-1 justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">Implementation Difficulty:</div>
            <div className="flex-1 max-w-24 inline-flex flex-col justify-start items-end gap-2">
              <div className="px-2 py-1 bg-white/10 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-black/0 inline-flex justify-center items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-700 rounded-full" />
                <div className="justify-start text-white text-xs font-normal font-['Inter'] leading-tight">Low</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch pt-6 inline-flex justify-start items-start gap-2">
          <div data-show-left-icon="false" data-show-right-icon="false" data-size="sm" data-state="Default" data-variant="Outline" className="flex-1 h-9 px-3 py-2 bg-base-background rounded-md outline outline-1 outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2">
            <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">View Details</div>
          </div>
          <div data-show-left-icon="true" data-show-right-icon="false" data-size="sm" data-state="Default" data-variant="Secondary" className="flex-1 h-9 px-3 py-2 bg-base-secondary rounded-md flex justify-center items-center gap-2">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-2.5 h-2.5 left-[3.33px] top-[3.33px] absolute bg-base-foreground border-[1.33px] border-base-secondary-foreground" />
            </div>
            <div className="justify-center text-base-secondary-foreground text-sm font-medium font-['Inter'] leading-tight">Add to Plan</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default RecommendationsTab;
