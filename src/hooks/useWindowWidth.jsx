/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";

export default function useWindowWidth(screenSize) {
  const [onSmallScreen, setOnSmallScreen] = useState(true);

  const checkOnSmallScreen = useCallback(() => {
    setOnSmallScreen(window.innerWidth < screenSize);
  }, [screenSize]);

  useEffect(() => {
    checkOnSmallScreen();

    window.addEventListener("resize", checkOnSmallScreen);

    return () => window.removeEventListener("resize", checkOnSmallScreen);
  });

  return onSmallScreen;
}
