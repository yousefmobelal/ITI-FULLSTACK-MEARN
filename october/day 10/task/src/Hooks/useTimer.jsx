import { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  let interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, [timer]);

  const resetTimer = () => {
    setTimer(0);
    clearInterval(interval.current);
  };

  return [getFormattedTime(timer), resetTimer];
};

const getFormattedTime = (timeInSeconds) => {
  const totalSeconds = timeInSeconds;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours}h ${minutes}m ${seconds}s`;
};

export default useTimer;
