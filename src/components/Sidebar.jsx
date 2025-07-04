import {
  SigmaIcon,
  FileChartLineIcon,
  Settings2Icon,
  LightbulbIcon,
  LayoutDashboardIcon,
  CrownIcon,
  ArrowRightIcon,
} from "lucide-react";
import { useNavigate } from "react-router";

import SidebarItem from "./ui/SidebarItem";
import UserDropDown from "./ui/UserDropDown";
import Logo from "./Logo";
import { getAuth } from "@/contexts/auth-context";

function Sidebar({ activeView, changeView }) {
  const { user } = getAuth();

  const navigate = useNavigate();

  // For demo purposes - in real app, this would come from user context/auth
  const isFreePlan = true; // Change this based on user's actual plan

  const addBehaviour = (n) => {
    return { onClick: changeView(n), active: activeView == n };
  };

  const handleUpgradeClick = () => {
    navigate("/pricing");
  };

  return (
    <div className="w-64 self-stretch relative border-r inline-flex flex-col justify-start items-start">
      <div className="self-stretch p-2 flex flex-col justify-start items-start gap-2">
        <Logo />
      </div>
      <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-2">
        <div className="self-stretch p-2 flex flex-col justify-start items-start">
          <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <SidebarItem
              title="Dashboard"
              Icon={LayoutDashboardIcon}
              {...addBehaviour(1)}
            />
            <SidebarItem
              title="Carbon Calculator"
              Icon={SigmaIcon}
              {...addBehaviour(2)}
            />
            <SidebarItem
              title="Recommendations"
              Icon={LightbulbIcon}
              {...addBehaviour(3)}
            />
            <SidebarItem
              title="Reports & Analysis"
              Icon={FileChartLineIcon}
              {...addBehaviour(4)}
            />
            <SidebarItem
              title="Settings"
              Icon={Settings2Icon}
              {...addBehaviour(5)}
            />
          </div>
        </div>
      </div>

      {/* Upgrade Banner for Free Plan Users */}
      {isFreePlan && (
        <div className="self-stretch p-3  mb-36">
          <div className="p-4 bg-gradient-to-br from-lime-400/10 to-lime-600/10 border border-lime-400/20 rounded-xl">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 bg-lime-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CrownIcon className="w-4 h-4 text-lime-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-base-foreground mb-1">
                  Unlock Premium Features
                </h4>
                <p className="text-xs text-base-muted-foreground leading-relaxed">
                  Get personalized recommendations, advanced analytics, and goal
                  tracking
                </p>
              </div>
            </div>

            <button
              onClick={handleUpgradeClick}
              className="w-full px-3 py-2 bg-lime-400 hover:bg-lime-500 text-black text-xs font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group"
            >
              Upgrade Now
              <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      )}

      {user && <UserDropDown name={user.name} email={user.email} />}
    </div>
  );
}

export default Sidebar;
