"use client";

import { useMemo } from "react";
import type { QuizSession } from "@/types/quizSession";

export default function useQuizSession(
  id: number | string,
): QuizSession | null {
  return useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const stored = localStorage.getItem(`quiz-${id}-session`);

    if (!stored) {
      return null;
    }

    return JSON.parse(stored) as QuizSession;
  }, [id]);
}
