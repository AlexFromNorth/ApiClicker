import { FC, useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import Clicker from "./components/clicker";

const App: FC = () => {
  const [clicks, setClicks] = useState(0);
  const [clickerEvent, setClickerEvent] = useState(false);

  return (
    <>
      <div className="card">
        {/* <button className={clickerEvent ? 'disabled' : '' }  onClick={() => setClicks((count) => count + 1)}>Кликнуть</button>
        <p>{clicks}</p> */}
        <Clicker
          clicks={clicks}
          setClicks={setClicks}
          setClickerEvent={setClickerEvent}
          clickerEvent={clickerEvent}
        />
      </div>
    </>
  );
};

export default App;
