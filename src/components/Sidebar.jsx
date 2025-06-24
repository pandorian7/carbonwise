import { SigmaIcon, FileChartLineIcon, Settings2Icon, LightbulbIcon, LayoutDashboardIcon } from "lucide-react";

import SidebarItem from "./ui/SidebarItem";
import UserDropDown from "./ui/UserDropDown";
import Logo from "./Logo";


function Sidebar({activeView, changeView}) {

  const addBehaviour = (n) => {return {onClick:changeView(n), active:activeView==n}}

  return (
    <div className="w-64 self-stretch relative border-r inline-flex flex-col justify-start items-start">
      <div className="self-stretch p-2 flex flex-col justify-start items-start gap-2">
        <Logo/>
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
