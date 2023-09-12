import { FC, useState } from "react";
import "./App.css";
import Clicker from "./components/clicker";

const App: FC = () => {
  const [clicks, setClicks] = useState<number>(0);
  const [clickerEvent, setClickerEvent] = useState<boolean>(false);

  return (
    <>
      <div className="card">
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
