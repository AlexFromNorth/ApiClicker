import axios from "axios";
import { useEffect } from "react";

// Кастомный хук для обновления отображаемых кликов при изменении clicks
const useUpdateClicks = (
  displayedClicks,
  setDisplayedClicks,
  clicks,
  setClickerEvent
) => {
  useEffect(() => {
    if (displayedClicks !== 0) {

      const apiUrl = "https://lk.zont-online.ru/api/button_count";
      const headers = {
        "X-ZONT-Client": "jacklex@bk.ru",
        "Content-Type": "application/json",
      };
      axios
        .post(apiUrl, { count: displayedClicks }, { headers })
        .then((resp) => {
          const allPersons = resp.data.count;
          setDisplayedClicks(allPersons + clicks);
          setClickerEvent(false);
        })
        .catch((er) => {
          console.log(er);
          setClickerEvent(false);
        });
      setClickerEvent(true);
    }
  }, [displayedClicks]);
};

export default useUpdateClicks;
