import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getAuth } from "@/contexts/auth-context";

function UserDropDown({
  name = "name",
  email = "email@example.com",
  icon = "https://placehold.co/32x32",
}) {
  const { setToken } = getAuth();

  const onLogOut = () => setToken(null)

  return (
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
          <img className="w-8 h-8 relative rounded-lg" src={icon} />
        </div>
        <div className="flex-1 inline-flex flex-col justify-center items-start gap-0.5">
          <div className="self-stretch justify-start text-base-sidebar-foreground text-sm font-semibold font-['Inter'] leading-none">
            {name}
          </div>
          <div className="self-stretch justify-start text-base-sidebar-foreground text-xs font-normal font-['Inter'] leading-3">
            {email}
          </div>
        </div>
        <div
          data-active="No"
          data-type="Up Down"
          className="w-4 h-4 relative flex justify-center items-center"
        >
          <div className="w-4 h-4 left-0 top-0 absolute overflow-hidden">
            {/* <ChevronsUpDownIcon className="text-base-foreground icon16" /> */}
          </div>
        </div>
      </div>
      <Button variant="defaultOutlined" className="w-full my-2" onClick={onLogOut}>
        Logout
      </Button>
    </div>
  );
}

export default UserDropDown;
