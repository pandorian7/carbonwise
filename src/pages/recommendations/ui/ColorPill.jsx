import React from "react";

/**
 * @param {{ difficulty?: "Low" | "Medium" | "High" }} props
 */
function ColorPill({ difficulty = "Low" }) {

    const diff = {
        Low: "bg-green-700",
        Medium: "bg-yellow-700",
        High: "bg-red-700"
    }

  return (
    <div className="px-2 py-1 bg-white/10 rounded-lg outline-[1.50px] outline-offset-[-1.50px] outline-black/0 inline-flex justify-center items-center gap-2">
      <div className={`w-1.5 h-1.5 ${diff[difficulty]} rounded-full`} />
      <div className="justify-start text-white text-xs font-normal font-['Inter'] leading-tight">
        {difficulty}
      </div>
    </div>
  );
}

export default ColorPill;
