import React from "react";

function Sidebar() {
  return (
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
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sigma-icon lucide-sigma"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb-icon lucide-lightbulb"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-chart-line-icon lucide-file-chart-line"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings2-icon lucide-settings-2"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F4F4F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down"
              >
                <path d="m7 15 5 5 5-5" />
                <path d="m7 9 5-5 5 5" />
              </svg>
              {/* <div className="w-1.5 h-2.5 left-[4.67px] top-[2.67px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-base-sidebar-foreground" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
