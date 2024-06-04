import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResizing = (event: any) => {
    setWidth(event.currentTarget.innerWidth);
    setHeight(event.currentTarget.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResizing);

    return () => window.removeEventListener("resize", handleWindowResizing);
  }, [window.innerWidth, window.innerHeight]);

  return { width, height };
};
