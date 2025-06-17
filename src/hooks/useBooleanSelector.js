import { useState, useEffect } from "react";

function useBooleanSelector(n, selected) {
  const [state, setState] = useState(
    Array.from({ length: n }, (_, i) => i + 1 === selected)
  );
  const [active, setActive] = useState(
    selected >= 1 && selected <= n ? selected : null
  );

  useEffect(() => {
    if (selected == null || selected < 1 || selected > n) {
      setState(Array(n).fill(false));
      setActive(null);
    } else {
      setState(Array.from({ length: n }, (_, i) => i + 1 === selected));
      setActive(selected);
    }
  }, [n, selected]);

  const setSelected = (index) => {
    if (index == null || index < 1 || index > n) {
      setState(Array(n).fill(false));
      setActive(null);
    } else {
      setState(Array.from({ length: n }, (_, i) => i + 1 === index));
      setActive(index);
    }
  };

  return [...state, setSelected, active];
}

export default useBooleanSelector;
