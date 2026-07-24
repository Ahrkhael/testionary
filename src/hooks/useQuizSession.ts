"use client";

import { useMemo } from "react";

export default function useQuizSession(id: number | null) {
  return useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const stored = localStorage.getItem(`quiz-${id}-session`);

    if (!stored) {
      return null;
    }

    return JSON.parse(stored);
  }, [id]);
}
