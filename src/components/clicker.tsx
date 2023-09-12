import React, { useState, FC } from "react";
import useUpdateClicks from "../hooks/useUpdateClicks";
import useUpdateClicksInterval from "../hooks/useUpdateClicksInterval";

const Clicker: FC = ({ clicks, setClicks, setClickerEvent, clickerEvent }) => {
  const [displayedClicks, setDisplayedClicks] = useState(0);

  useUpdateClicks(displayedClicks, setDisplayedClicks, clicks, setClickerEvent);

  useUpdateClicksInterval(
    clicks,
    setClicks,
    displayedClicks,
    setDisplayedClicks,
    setClickerEvent
  );

  return (
    <div>
      <button
        className={clickerEvent ? "disabled btn" : "" + 'btn'}
        onClick={() => setClicks((count) => count + 1)}
      >
        Кликнуть
      </button>
      <p>{clicks}</p>
      <h1>Клики: {displayedClicks}</h1>
    </div>
  );
};

export default Clicker;
