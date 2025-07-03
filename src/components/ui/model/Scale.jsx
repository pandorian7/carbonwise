import React from "react";

function Scale({
  ticks = 5,
  start = 0,
  step = 1,
  mapper = (i) => i,
}) {
  return (
    <div className="self-stretch inline-flex justify-between items-center">
      {Array.from({ length: ticks }).map((_, i) => (
        <div className="w-2.5 inline-flex flex-col justify-start items-center gap-px" key={i}>
          <div className="w-1 h-1 bg-zinc-300 rounded-full" />
          <div className="text-center justify-center text-base-foreground text-sm font-medium font-['Inter'] leading-tight">
            {mapper(i*step+start)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Scale;
