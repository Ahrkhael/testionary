"use client";

import { useEffect, useState } from "react";

export default function useTimer(
  id: number,
  startedAt: number | null,
  elapsedTime: number | null,
  finished: boolean,
) {
  const [seconds, setSeconds] = useState(() => {
    if (finished && elapsedTime !== null) {
      return Math.floor(elapsedTime / 1000);
    }

    return 0;
  });

  const [isRunning, setIsRunning] = useState(!finished);

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

  const stop = () => {
    const stored = localStorage.getItem(`quiz-${id}-session`);

    if (!stored) return;

    const session = JSON.parse(stored);

    const updatedSession = {
      ...session,
      finishedAt: Date.now(),
      elapsedTime: Date.now() - session.startedAt,
    };

    setSeconds(Math.floor(updatedSession.elapsedTime / 1000));
    setIsRunning(false);

    localStorage.setItem(`quiz-${id}-session`, JSON.stringify(updatedSession));
  };

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
