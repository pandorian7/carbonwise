import React from "react";


function ActiveCalculation() {
  return (
    <div className="w-full h-[100vh] px-2 pt-2 bg-base-sidebar-background inline-flex justify-start items-start overflow-hidden">
      <div className="w-64 self-stretch relative border-r inline-flex flex-col justify-start items-start">
        <div className="self-stretch p-2 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch p-2 rounded-md inline-flex justify-start items-center gap-1">
            {/* <div className="w-6 h-6 outline outline-[2.50px] outline-offset-[-1.25px] outline-lime-300" /> */}
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6667 1.33325V24.6666M21.9162 4.75034L5.41709 21.2495M25.3333 12.9999H2M21.9162 21.2495L5.41709 4.75034"
                stroke="#C1F17E"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="flex-1 inline-flex flex-col justify-center items-start gap-0.5">
              <div className="self-stretch justify-start text-lime-300 text-2xl font-semibold font-['Inter'] leading-normal">
                CarbonWise
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch p-2 flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch h-8 p-2 rounded-md inline-flex justify-start items-center gap-2">
                  <div className="w-4 h-4 relative overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F4F4F5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
                    >
                      <rect width="7" height="9" x="3" y="3" rx="1" />
                      <rect width="7" height="5" x="14" y="3" rx="1" />
                      <rect width="7" height="9" x="14" y="12" rx="1" />
                      <rect width="7" height="5" x="3" y="16" rx="1" />
                    </svg>
                  </div>
                  <div className="flex-1 justify-start text-base-sidebar-foreground text-sm font-normal font-['Inter'] leading-none">
                    Dashboard
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch h-8 p-2 bg-base-sidebar-accent rounded-md inline-flex justify-start items-center gap-2">
                  <div className="w-4 h-4 relative overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F4F4F5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-sigma-icon lucide-sigma"
                    >
                      <path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" />
                    </svg>
                    {/* <div className="w-2 h-2.5 left-[4px] top-[2.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-base-sidebar-foreground" /> */}
                  </div>
                  <div className="flex-1 justify-start text-base-sidebar-foreground text-sm font-normal font-['Inter'] leading-none">
                    Carbon Calculator
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch h-8 p-2 rounded-md inline-flex justify-start items-center gap-2">
                  <div className="w-4 h-4 relative overflow-hidden">
                    {/* <div className="w-2 h-2 left-[4px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-base-sidebar-foreground" />
                <div className="w-1 h-0 left-[6px] top-[12px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-base-sidebar-foreground" />
                <div className="w-[2.67px] h-0 left-[6.67px] top-[14.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-base-sidebar-foreground" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F4F4F5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-lightbulb-icon lucide-lightbulb"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  </div>
                  <div className="flex-1 justify-start text-base-sidebar-foreground text-sm font-normal font-['Inter'] leading-none">
                    Recommendations
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch h-8 p-2 rounded-md inline-flex justify-start items-center gap-2">
                  <div className="w-4 h-4 relative overflow-hidden">
                    {/* <div className="w-2.5 h-3.5 left-[2.67px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-base-sidebar-foreground" />
                <div className="w-1 h-1 left-[9.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-base-sidebar-foreground" />
                <div className="w-1.5 h-[2.67px] left-[5.33px] top-[8.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-base-sidebar-foreground" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F4F4F5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-file-chart-line-icon lucide-file-chart-line"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="m16 13-3.5 3.5-2-2L8 17" />
                    </svg>
                  </div>
                  <div className="flex-1 justify-start text-base-sidebar-foreground text-sm font-normal font-['Inter'] leading-none">
                    Reports & Analysis
                  </div>
                </div>
              </div>
              <div
                data-submenu="False"
                className="self-stretch flex flex-col justify-start items-center"
              >
                <div
                  data-collapsed="False"
                  data-dropdown="true"
                  data-icon="true"
                  data-state="Default"
                  data-subtitle="true"
                  data-type="Collapsible"
                  className="self-stretch h-8 p-2 rounded-md inline-flex justify-start items-center gap-2"
                >
                  <div className="w-4 h-4 relative overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F4F4F5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-settings2-icon lucide-settings-2"
                    >
                      <path d="M14 17H5" />
                      <path d="M19 7h-9" />
                      <circle cx="17" cy="17" r="3" />
                      <circle cx="7" cy="7" r="3" />
                    </svg>
                    {/* <div className="w-2.5 h-2.5 left-[2.67px] top-[2.67px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-base-sidebar-foreground" /> */}
                  </div>
                  <div className="flex-1 justify-start text-base-sidebar-foreground text-sm font-normal font-['Inter'] leading-none">
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-64 p-2 bottom-2 left-0 absolute flex flex-col justify-start items-start gap-2">
          <div
            data-collapsed="False"
            data-dropdown="true"
            data-icon="true"
            data-state="Default"
            data-subtitle="true"
            data-type="Big Icon"
            className="self-stretch p-2 rounded-md inline-flex justify-start items-center gap-2"
          >
            <div data-type="Avatar" className="flex justify-start items-center">
              <img
                className="w-8 h-8 relative rounded-lg"
                src="https://placehold.co/32x32"
              />
            </div>
            <div className="flex-1 inline-flex flex-col justify-center items-start gap-0.5">
              <div className="self-stretch justify-start text-base-sidebar-foreground text-sm font-semibold font-['Inter'] leading-none">
                shadcn
              </div>
              <div className="self-stretch justify-start text-base-sidebar-foreground text-xs font-normal font-['Inter'] leading-3">
                m@example.com
              </div>
            </div>
            <div
              data-active="No"
              data-type="Up Down"
              className="w-4 h-4 relative flex justify-center items-center"
            >
              <div className="w-4 h-4 left-0 top-0 absolute overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
                {/* <div className="w-1.5 h-2.5 left-[4.67px] top-[2.67px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-base-sidebar-foreground" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 self-stretch min-w-[560px] bg-base-background rounded-tl-2xl rounded-tr-2xl inline-flex flex-col justify-start items-center overflow-hidden">
        <div className="self-stretch h-16 bg-base-background border-b border-base-border inline-flex justify-center items-center">
          <div className="flex-1 max-w-[1280px] px-6 flex justify-start items-center gap-2">
            <div
              data-state="Default"
              className="w-7 h-7 rounded-md flex justify-center items-center"
            >
              <div className="w-4 h-4 relative overflow-hidden">
                {/* <div className="w-3 h-3 left-[2px] top-[2px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-base-foreground" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left-icon lucide-panel-left"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>
              </div>
            </div>
            <div className="w-2 flex justify-start items-center">
              <div className="w-0 h-3.5 relative">
                <div className="w-0 h-3.5 left-0 top-0 absolute outline  outline-offset-[-0.50px] outline-base-border" />
              </div>
            </div>
            <div
              data-breadcrumb-1="true"
              data-breadcrumb-2="false"
              data-breadcrumb-3="false"
              data-breadcrumb-4="false"
              data-breadcrumb-5="false"
              data-size="md"
              className="flex justify-start items-center gap-2.5 flex-wrap content-center"
            >
              <div
                data-state="Default"
                data-variant="Link Current"
                className="flex justify-center items-center gap-2.5"
              >
                <div className="justify-start text-base-sidebar-foreground text-sm font-normal font-['Inter'] leading-none">
                  Carbon Calculator
                </div>
              </div>
              <div className="w-6 h-6 relative overflow-hidden">
                {/* <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-base-muted-foreground" /> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 bg-base-background border-b border-base-border inline-flex justify-start items-center gap-6 overflow-hidden">
          <div className="flex-1 flex justify-start items-center gap-2">
            <div className="px-4 py-6 border-b-[3px] border-white flex justify-center items-center gap-2">
              <div className="justify-start text-white text-base font-semibold font-['Plus_Jakarta_Sans'] leading-tight">
                Active Calculation
              </div>
            </div>
            <div className="px-4 py-6 flex justify-center items-center gap-2">
              <div className="justify-start text-base-muted-foreground text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
                Saved Drafts
              </div>
              <div
                data-state="Default"
                data-variant="Secondary"
                className="px-2.5 py-0.5 bg-base-secondary rounded-full outline  outline-offset-[-1px] outline-tailwind-colors-base-transparent/0 flex justify-center items-center gap-2.5"
              >
                <div className="justify-start text-base-secondary-foreground text-xs font-semibold font-['Inter'] leading-none">
                  3
                </div>
              </div>
            </div>
          </div>
          <div
            data-show-left-icon="true"
            data-show-right-icon="false"
            data-size="default"
            data-state="Default"
            data-variant="Outline"
            className="h-10 px-4 py-2 bg-base-background rounded-md outline  outline-offset-[-1px] outline-lime-400 flex justify-center items-center gap-2"
          >
            <div className="w-4 h-4 relative overflow-hidden">
              {/* <div className="w-2.5 h-2.5 left-[3.33px] top-[3.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-lime-400" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A6EE43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </div>
            <div className="justify-center text-lime-400 text-sm font-medium font-['Inter'] leading-tight">
              New Calculation
            </div>
          </div>
        </div>
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
                  Enter electricity, gas, and other energy sources that power
                  your operations.
                </div>
              </div>
              <div
                data-show-left-icon="true"
                data-show-right-icon="false"
                data-size="sm"
                data-state="Default"
                data-variant="Outline"
                className="h-9 px-3 py-2 bg-base-background rounded-md outline  outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2"
              >
                <div className="w-4 h-4 relative overflow-hidden">
                  {/* <div className="w-2.5 h-2.5 left-[3.33px] top-[3.33px] absolute bg-base-foreground" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </div>
                <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                  Add Details
                </div>
              </div>
            </div>
            <div className="self-stretch px-5 py-4 rounded-2xl outline  outline-offset-[-1px] outline-base-border inline-flex justify-start items-center gap-3">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                <div className="self-stretch justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
                  Transportation & Travel
                </div>
                <div className="self-stretch justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">
                  Include fleet vehicles, business travel, and employee
                  commuting data.
                </div>
              </div>
              <div
                data-show-left-icon="true"
                data-show-right-icon="false"
                data-size="sm"
                data-state="Default"
                data-variant="Outline"
                className="h-9 px-3 py-2 bg-base-background rounded-md outline  outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2"
              >
                <div className="w-4 h-4 relative overflow-hidden">
                  {/* <div className="w-2.5 h-2.5 left-[3.33px] top-[3.33px] absolute bg-base-foreground" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </div>
                <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                  Add Details
                </div>
              </div>
            </div>
            <div className="self-stretch px-5 py-4 rounded-2xl outline  outline-offset-[-1px] outline-base-border inline-flex justify-start items-center gap-3">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                <div className="self-stretch justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
                  Resource Consumption
                </div>
                <div className="self-stretch justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">
                  Capture materials, water usage, and waste management
                  practices.
                </div>
              </div>
              <div
                data-show-left-icon="true"
                data-show-right-icon="false"
                data-size="sm"
                data-state="Default"
                data-variant="Outline"
                className="h-9 px-3 py-2 bg-base-background rounded-md outline  outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2"
              >
                <div className="w-4 h-4 relative overflow-hidden">
                  {/* <div className="w-2.5 h-2.5 left-[3.33px] top-[3.33px] absolute bg-base-foreground" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </div>
                <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
                  Add Details
                </div>
              </div>
            </div>
            <div className="self-stretch py-4 rounded-2xl inline-flex justify-start items-center gap-3">
              <div className="flex-1 px-2 inline-flex flex-col justify-start items-start gap-1">
                <div className="self-stretch justify-start text-white text-base font-semibold font-['Plus_Jakarta_Sans'] leading-tight">
                  Need Help Estimating?
                </div>
                <div className="self-stretch justify-start text-base-muted-foreground text-xs font-normal font-['Inter'] leading-tight">
                  Capture materials, water usage, and waste management
                  practices.
                </div>
              </div>
              <div
                data-show-left-icon="true"
                data-show-right-icon="false"
                data-size="sm"
                data-state="Default"
                data-variant="Secondary"
                className="h-9 px-3 py-2 bg-base-secondary rounded-md flex justify-center items-center gap-2"
              >
                <div className="w-4 h-4 relative overflow-hidden">
                  {/* <div className="w-3.5 h-3.5 left-[0.67px] top-[1.33px] absolute bg-base-foreground border-[1.33px] border-base-secondary-foreground" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4F4F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
                </div>
                <div className="justify-center text-base-secondary-foreground text-sm font-medium font-['Inter'] leading-tight">
                  Get Smart Defaults
                </div>
              </div>
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
        {/* <div
          data-orientation="Vertical"
          className="self-stretch h-[100px] origin-top-left rotate-90 inline-flex justify-start items-center gap-2.5"
        >
          <div className="w-0 self-stretch origin-top-left rotate-90 outline  outline-offset-[-0.50px] outline-base-border"></div>
        </div> */}
        <div className="w-full max-w-[1280px] p-6 inline-flex justify-end items-start gap-4">
          <div
            data-show-left-icon="false"
            data-show-right-icon="false"
            data-size="default"
            data-state="Default"
            data-variant="Outline"
            className="h-10 px-4 py-2 bg-base-background rounded-md outline  outline-offset-[-1px] outline-base-input flex justify-center items-center gap-2"
          >
            <div className="justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
              Save for Later
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
              Generate Intelligence Report
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveCalculation;
