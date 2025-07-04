import React from "react";

import { Button } from "@/components/ui/Button";
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
function ToggleGroup({ options, selected, onChange }) {
  const selectionData = useBooleanSelector(
    options.length,
    options.indexOf(selected) + 1
  );
  const setSelected = selectionData.at(-2);
  const selectedIndex = selectionData.at(-1) - 1;

  return (
    <div className="w-40 flex justify-start items-center gap-1">
      {Array.from({ length: options.length }).map((_, i) => (
        <Button key={i}
          className={"w-20"}
          variant={selectedIndex == i ? "secondary" : "secondaryOutlined"}
          onClick={() => {
            setSelected(i + 1);
            onChange(options[i]);
          }}
        >
          {options.at(i)}
        </Button>
      ))}
    </div>
  );
}

export default ToggleGroup;
