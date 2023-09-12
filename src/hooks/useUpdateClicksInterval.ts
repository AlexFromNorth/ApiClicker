import { useEffect } from "react";

// Кастомный хук для обновления отображаемых кликов с интервалом
const useUpdateClicksInterval = (
  clicks,
  setClicks,
  displayedClicks,
  setDisplayedClicks,
  setClickerEvent
) => {
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
