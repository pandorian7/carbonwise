import React from "react";

import { XIcon } from "lucide-react";

import { Button, IconButton } from "../Button";
import { cn } from "@/lib/utils";

function Model({
  title,
  children,
  description,
  onClose,
  onSubmit,
  className = "",
  childrenClassName = "",
  hideButtons = false,
}) {
  return (
    <div
      className={cn(
        "w-full max-h-[1000px] max-w-[780px] bg-base-sidebar-background rounded-[20px] inline-flex flex-col justify-start items-start gap-2 overflow-hidden",
        className
      )}
    >
      <div className="self-stretch p-4 bg-base-background inline-flex justify-center items-center gap-2">
        <div className="flex-1 justify-start text-base-foreground text-base font-semibold font-['Plus_Jakarta_Sans'] leading-tight">
          {title}
        </div>
        <div className="w-10 h-10 px-4 py-2 bg-base-background rounded-md outlineoutline-offset-[-1px] outline-base-input flex justify-center items-center gap-2">
          <IconButton Icon={XIcon} variant={"ghost"} onClick={onClose} />
          {/* <div className="w-4 h-4 relative"> */}
          {/* <XIcon className="text-base-foreground icon16" /> */}
          {/* <div className="w-2 h-2 left-[3.76px] top-[3.76px] absolute bg-base-foreground" /> */}
          {/* </div> */}
        </div>
      </div>

      {description && (
        <div className="self-stretch px-4 py-1 inline-flex justify-center items-center gap-2">
          <div className="flex-1 justify-start text-base-muted-foreground text-sm font-normal font-['Plus_Jakarta_Sans'] leading-tight">
            {description}
          </div>
        </div>
      )}
      <div
        className={cn(
          "self-stretch p-4 flex flex-col justify-start items-start gap-6",
          childrenClassName
        )}
      >
        {children}
      </div>
      {!hideButtons && (
        <div className="self-stretch p-4 bg-base-background inline-flex justify-end items-center gap-2">
          <Button size={"lg"} variant={"secondaryOutlined"}>
            Complete Later
          </Button>
          <Button size={"lg"} onClick={onSubmit}>
            Save & Continue
          </Button>
        </div>
      )}
    </div>
  );
}

export function ModelEntry({ children, title }) {
  return (
    <div className="self-stretch flex flex-col justify-center items-start gap-4">
      {title && (
        <div className="self-stretch inline-flex justify-center items-center gap-2">
          <div className="flex-1 justify-start text-base-foreground text-sm font-medium font-['Inter'] leading-none">
            {title}
          </div>
        </div>
      )}
      <div className="self-stretch inline-flex justify-center items-start gap-6">
        {children}
      </div>
    </div>
  );
}

export function ModelEntryContainer({ children }) {
  return (
    <div className="flex justify-center items-center gap-4">{children}</div>
  );
}

export default Model;
