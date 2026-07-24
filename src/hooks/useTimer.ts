"use client";

import { useEffect, useState } from "react";

export default function useTimer(startedAt: number | null) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || startedAt === null) {
      return;
    }

    const update = () => {
      setSeconds(Math.floor((Date.now() - startedAt) / 1000));
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [startedAt, isRunning]);

  const stop = () => setIsRunning(false);

  const start = () => setIsRunning(true);

  const reset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return {
    seconds,
    isRunning,
    start,
    stop,
    reset,
  };
}
