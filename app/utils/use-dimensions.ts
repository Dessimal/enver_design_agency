import { useState, useLayoutEffect } from "react";

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [ref]);

  return dimensions;
};
