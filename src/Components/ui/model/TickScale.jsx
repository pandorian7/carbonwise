import React from "react";

import { Slider } from "../slider";
import Scale from "./Scale";

function TickScale() {
  return (
    <div className="flex-1 inline-flex flex-col justify-start items-start">
      <div className="self-stretch h-10 flex flex-col justify-center items-center gap-2">
        <div className="self-stretch bg-base-secondary rounded-full flex flex-col justify-start items-start gap-2.5">
          <Slider />
        </div>
      </div>
      <Scale
        ticks={6}
        start={0}
        step={1}
        mapper={(i) => `${i}${i ? "K" : ""}`}
      />
    </div>
  );
}

export default TickScale;
