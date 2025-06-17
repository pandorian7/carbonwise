import { SigmaIcon, FileChartLineIcon, Settings2Icon, LightbulbIcon, LayoutDashboardIcon } from "lucide-react";

import SidebarItem from "./ui/SidebarItem";
import UserDropDown from "./ui/UserDropDown";


function Sidebar({activeView, changeView}) {

  const addBehaviour = (n) => {return {onClick:changeView(n), active:activeView==n}}

  return (
    <div className="w-64 self-stretch relative border-r inline-flex flex-col justify-start items-start">
      <div className="self-stretch p-2 flex flex-col justify-start items-start gap-2">
        <div className="self-stretch p-2 rounded-md inline-flex justify-start items-center gap-1">
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
            <SidebarItem title="Dashboard" Icon={LayoutDashboardIcon} {...addBehaviour(1)}/>
            <SidebarItem title="Carbon Calculator" Icon={SigmaIcon} {...addBehaviour(2)}/>
            <SidebarItem title="Recommendations" Icon={LightbulbIcon} {...addBehaviour(3)}/>
            <SidebarItem title="Reports & Analysis" Icon={FileChartLineIcon} {...addBehaviour(4)}/>
            <SidebarItem title="Settings" Icon={Settings2Icon} {...addBehaviour(5)}/>
          </div>
        </div>
      </div>
      <UserDropDown />
    </div>
  );
}

export default Sidebar;
