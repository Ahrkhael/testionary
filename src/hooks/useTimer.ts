"use client";

import { useEffect, useState, useRef } from "react";

export default function useTimer(storageKey: string) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const startedAt = useRef<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);

    if (stored) {
      startedAt.current = Number(stored);
    } else {
      const now = Date.now();

      localStorage.setItem(storageKey, now.toString());

      startedAt.current = now;
    }
  }, [storageKey]);

  useEffect(() => {
    if (!isRunning || startedAt.current !== null) return;

    const update = () => {
      setSeconds(Math.floor((Date.now() - startedAt.current!) / 1000));
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [isRunning, startedAt]);

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
