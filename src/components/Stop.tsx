import React, { useState, useRef } from "react";
// import { clearInterval } from "timers";

const Stop: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startHandler = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
    setIsRunning(true);
  };

  const stopHandler = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
  };
  const lapHandler = () => {
    setLaps((prevLaps) => [...prevLaps, formatTime()]);
  };
  const resetHandler = () => {
    stopHandler();
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const formatTime = () => {
    const min = Math.floor(time / 60000);
    const sec = Math.floor((time % 60000) / 1000);
    const milSec = Math.floor((time % 1000) / 10);
    return `${padTime(min)}:${padTime(sec)}:${padTime(milSec)}`;
  };

  const padTime = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div>
      <div>{formatTime()}</div>
      <div className="btn">
        {!isRunning ? (
          <button onClick={startHandler}>Start</button>
        ) : (
          <button onClick={stopHandler}>Stop</button>
        )}

        <button onClick={lapHandler.bind(null, "lap")}>Lap</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <div className="laps">
        <div>Laps</div>
        {laps.length > 0
          ? laps.map((el) => {
              return <div>{el}</div>;
            })
          : null}
      </div>
    </div>
  );
};

export default Stop;
