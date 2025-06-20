import React from "react";

function Tab({ title = "Tab", active = false, count = 0, onClick = ()=>{} }) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-6 flex justify-center items-center group transition duration-150 ${count ? "gap-2": ""} ${
        active ? "border-b-[3px] border-white" : "hover:border-b-[1px] hover:border-white"
      }`}
    >
      <div className={`justify-start ${active ? "text-white text-base font-semibold": "text-base-muted-foreground text-sm font-normal group-hover:text-white transition duration-150"} font-['Plus_Jakarta_Sans'] leading-tight`}>
        {title}
      </div>
      {count ? (
        <div
          data-state="Default"
          data-variant="Secondary"
          className="px-2.5 py-0.5 bg-base-secondary rounded-full outline  outline-offset-[-1px] outline-tailwind-colors-base-transparent/0 flex justify-center items-center gap-2.5"
        >
          <div className="justify-start text-base-secondary-foreground text-xs font-semibold font-['Inter'] leading-none">
            {count}
          </div>
        </div>
      ): null}
    </div>
  );
}

export default Tab;
