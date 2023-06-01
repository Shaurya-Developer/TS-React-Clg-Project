import React, { useState, useRef } from "react";

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIsRunning(true);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsRunning(false);
    }
  };

  const lap = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  const reset = () => {
    stopStopwatch();
    setTime(0);
    setLaps([]);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <span>{formatTime(time)}</span>
      </div>
      <div>
        {isRunning ? (
          <button onClick={stopStopwatch}>Stop</button>
        ) : (
          <button onClick={startStopwatch}>Start</button>
        )}
        <button onClick={lap}>Lap</button>
        <button onClick={reset}>Reset</button>
      </div>
      {laps.length > 0 && (
        <div>
          <h2>Laps</h2>
          <ul>
            {laps.map((lapTime, index) => (
              <li key={index}>{formatTime(lapTime)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
};

const padTime = (value: number): string => {
  return value.toString().padStart(2, "0");
};

export default Stopwatch;
