import React from "react";

import Button from "./Button";
import useBooleanSelector from "@/hooks/useBooleanSelector";

/**
 * ToggleGroup component renders a group of toggle buttons based on the provided options.
 *
 * @template T
 * @param {Object} props
 * @param {T[]} props.options - List of selectable options.
 * @param {T} props.selected - The currently selected option.
 * @returns {JSX.Element}
 */
function ToggleGroup({ options, selected }) {
  const selectionData = useBooleanSelector(
    options.length,
    options.indexOf(selected)+1
  );
  const setSelected = selectionData.at(-2);
  const selectedIndex = selectionData.at(-1) - 1;

  return (
    <div className="w-40 flex justify-start items-center gap-1">
      {Array.from({ length: options.length }).map((_, i) => (
        <Button className={"w-20"} title={options.at(i)} variant={selectedIndex == i ? "Secondary" : "SecondaryOutlined"} onClick={()=>setSelected(i+1)}/>
      ))}
    </div>
  );
}

export default ToggleGroup;
