import React from "react";

import { XIcon } from "lucide-react";

function Model({title, children}) {
  return (
      <div className="w-full max-w-[780px] bg-base-sidebar-background rounded-[20px] inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
        <div className="self-stretch p-4 bg-base-background inline-flex justify-center items-center gap-2">
          <div className="flex-1 justify-start text-base-foreground text-base font-semibold font-['Plus_Jakarta_Sans'] leading-tight">
            {title}
          </div>
          <div
            className="w-10 h-10 px-4 py-2 bg-base-background rounded-md outlineoutline-offset-[-1px] outline-base-input flex justify-center items-center gap-2"
          >
            <div className="w-4 h-4 relative">
                <XIcon className="text-base-foreground icon16" />
              {/* <div className="w-2 h-2 left-[3.76px] top-[3.76px] absolute bg-base-foreground" /> */}
            </div>
          </div>
        </div>
        {/* <div className="self-stretch px-4 py-1 inline-flex justify-center items-center gap-2">
          <div className="flex-1 justify-start text-base-muted-foreground text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
            Energy typically represents 30-45% of a business's carbon footprint
            and offers significant cost-saving potential. Provide as many
            details as available—estimates are perfectly acceptable.
          </div>
        </div> */}
        {/* <div className="self-stretch p-4 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-center items-start gap-4">
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="flex-1 justify-start text-base-foreground text-sm font-medium font-['Inter'] leading-none">
                Electricity Usage (monthly) :
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-start gap-6">
              <div className="flex-1 inline-flex flex-col justify-start items-start">
                <div className="self-stretch h-10 flex flex-col justify-center items-center gap-2">
                  <div className="self-stretch bg-base-secondary rounded-full flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch pr-36 flex flex-col justify-start items-start gap-2.5">
                      <div className="self-stretch h-2 relative flex flex-col justify-start items-start">
                        <div className="self-stretch h-2 relative bg-base-primary rounded-full" />
                        <div className="w-5 h-5 left-[310px] top-[-6px] absolute bg-base-background rounded-full border-2 border-base-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-between items-center">
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="self-stretch text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      0
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      1K
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      2K
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      3K
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      4K
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      5K
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div
                  data-horizontal-layout="Yes"
                  data-show-description="false"
                  data-show-icon="false"
                  data-show-label="false"
                  data-show-link="false"
                  data-state="Default"
                  data-variant="Default"
                  className="w-24 max-w-24 flex justify-start items-start gap-4"
                >
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-10 px-3 py-2 bg-base-background rounded-md outline outline-offset-[-1px] outline-base-input inline-flex justify-start items-center gap-1 overflow-hidden">
                      <div className="flex-1 justify-start text-base-muted-foreground text-sm font-normal font-['Inter'] leading-tight">
                        0
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-32 flex justify-start items-center gap-1">
                  <div
                    data-show-icon="false"
                    data-show-text="true"
                    data-size="Default"
                    data-state="Pressed"
                    data-variant="Default"
                    className="flex-1 h-10 px-3 py-2.5 bg-base-accent rounded-md flex justify-center items-center gap-2"
                  >
                    <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      kWh
                    </div>
                  </div>
                  <div
                    data-show-icon="false"
                    data-show-text="true"
                    data-size="Default"
                    data-state="Default"
                    data-variant="Outline"
                    className="flex-1 h-10 px-3 py-2.5 bg-tailwind-colors-base-transparent/0 rounded-md outline outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2"
                  >
                    <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      MWh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-center items-start gap-4">
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="flex-1 justify-start text-base-foreground text-sm font-medium font-['Inter'] leading-none">
                Natural Gas (monthly) :
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-start gap-6">
              <div className="flex-1 inline-flex flex-col justify-start items-start">
                <div className="self-stretch h-10 flex flex-col justify-center items-center gap-2">
                  <div className="self-stretch bg-base-secondary rounded-full flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch pr-36 flex flex-col justify-start items-start gap-2.5">
                      <div className="self-stretch h-2 relative flex flex-col justify-start items-start">
                        <div className="self-stretch h-2 relative bg-base-primary rounded-full" />
                        <div className="w-5 h-5 left-[310px] top-[-6px] absolute bg-base-background rounded-full border-2 border-base-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-between items-center">
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="self-stretch text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      0
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      1K
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      2K
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      3K
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      4K
                    </div>
                  </div>
                  <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      5K
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div
                  data-horizontal-layout="Yes"
                  data-show-description="false"
                  data-show-icon="false"
                  data-show-label="false"
                  data-show-link="false"
                  data-state="Default"
                  data-variant="Default"
                  className="w-24 max-w-24 flex justify-start items-start gap-4"
                >
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-10 px-3 py-2 bg-base-background rounded-md outline outline-offset-[-1px] outline-base-input inline-flex justify-start items-center gap-1 overflow-hidden">
                      <div className="flex-1 justify-start text-base-muted-foreground text-sm font-normal font-['Inter'] leading-tight">
                        0
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-32 flex justify-start items-center gap-1">
                  <div
                    data-show-icon="false"
                    data-show-text="true"
                    data-size="Default"
                    data-state="Pressed"
                    data-variant="Default"
                    className="flex-1 h-10 px-3 py-2.5 bg-base-accent rounded-md flex justify-center items-center gap-2"
                  >
                    <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      therms
                    </div>
                  </div>
                  <div
                    data-show-icon="false"
                    data-show-text="true"
                    data-size="Default"
                    data-state="Default"
                    data-variant="Outline"
                    className="flex-1 h-10 px-3 py-2.5 bg-tailwind-colors-base-transparent/0 rounded-md outline outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2"
                  >
                    <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                      MMBtu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {children}
        <div className="self-stretch p-4 bg-base-background inline-flex justify-end items-center gap-2">
          <div
            data-show-left-icon="false"
            data-show-right-icon="false"
            data-size="default"
            data-state="Default"
            data-variant="Outline"
            className="h-10 px-4 py-2 bg-base-background rounded-md outline outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2"
          >
            <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
              Complete Later
            </div>
          </div>
          <div
            data-show-left-icon="false"
            data-show-right-icon="false"
            data-size="default"
            data-state="Default"
            data-variant="Default"
            className="h-10 px-4 py-2 bg-lime-400 rounded-md flex justify-center items-center gap-2"
          >
            <div className="justify-center text-base-primary-foreground text-sm font-medium font-['Inter'] leading-tight">
              Save & Continue
            </div>
          </div>
        </div>
      </div>
  );
}

export default Model;
