import React, { useEffect, useState } from "react";

export const useWindowsDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = hasWindow
      ? window
      : null;

    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleRezise = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleRezise);
      return () => window.removeEventListener("resize", handleRezise);
    }
  }, [hasWindow]);

  // console.log(windowDimensions);
  return windowDimensions;
};

export default useWindowsDimensions;
