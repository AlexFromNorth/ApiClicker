import axios from "axios";
import React, { useState, useEffect, FC } from "react";

const Clicker: FC = ({ clicks, setClicks, setClickerEvent }) => {
  const [displayedClicks, setDisplayedClicks] = useState(0);

  useEffect(() => {
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
        console.log(22);
      })
      .catch((er) => {
        setClickerEvent(false);
      });
  }, [displayedClicks]);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      // Обновляем отображаемое количество кликов раз в секунду
      if (clicks !== 0) {
        setClickerEvent(true);
        setDisplayedClicks(displayedClicks + clicks);
      }
      setClicks(0);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [clicks]);

  return (
    <div>
      <h1>Клики: {displayedClicks}</h1>
    </div>
  );
};

export default Clicker;
