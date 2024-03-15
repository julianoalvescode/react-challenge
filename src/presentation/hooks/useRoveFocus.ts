import { useMemo, useState } from "react";

import { useKeyPressEvent } from "react-use";

export const useRoveFocus = (size: number) => {
  const [currentFocus, setCurrentFocus] = useState(0);

  useKeyPressEvent("ArrowDown", () =>
    setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1)
  );
  useKeyPressEvent("ArrowUp", () =>
    setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1)
  );

  return useMemo(
    () => [currentFocus - 1, setCurrentFocus] as const,
    [currentFocus]
  );
};
