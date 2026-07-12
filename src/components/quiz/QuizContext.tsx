"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { Quiz } from "@/types/quiz";
import useQuiz from "@/hooks/useQuiz";

const QuizContext = createContext<ReturnType<typeof useQuiz> | null>(null);

interface QuizProviderProps {
  quiz: Quiz;
  children: ReactNode;
}

export function QuizProvider({ quiz, children }: QuizProviderProps) {
  const value = useQuiz(quiz);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizContext() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuizContext debe utilizarse dentro de QuizProvider");
  }

  return context;
}
