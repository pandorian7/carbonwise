function SidebarItem({ title = "Title", Icon = null, active = false, onClick=()=>{} }) {
  return (
    <div className="self-stretch flex flex-col justify-start items-center" onClick={onClick}>
      <div className={`self-stretch h-8 p-2 ${active ? "bg-base-sidebar-accent": ""} rounded-md inline-flex justify-start items-center gap-2`}>
        {Icon && (
          <div className="w-4 h-4 relative overflow-hidden">
            <Icon className="text-base-foreground icon16" />
          </div>
        )}
        <div className="flex-1 justify-start text-base-sidebar-foreground text-sm font-normal font-['Inter'] leading-none">
          {title}
        </div>
      </div>
    </div>
  );
}

export default SidebarItem