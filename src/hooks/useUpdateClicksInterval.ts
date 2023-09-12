import { useEffect } from "react";
import { UpdateClicksProps } from "../types/types";

// Кастомный хук для обновления отображаемых кликов с интервалом
const useUpdateClicksInterval = ({
  clicks,
  setClicks,
  displayedClicks,
  setDisplayedClicks,
  setClickerEvent
}:UpdateClicksProps) => {
  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (clicks !== 0) {
        setClickerEvent(true);
        setDisplayedClicks(displayedClicks + clicks);
        setClicks(0);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [clicks]);
};

export default useUpdateClicksInterval;
