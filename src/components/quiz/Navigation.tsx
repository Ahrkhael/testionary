"use client";

import { useQuizContext } from "./QuizContext";

export default function Navigation() {
  const {
    nextQuestion,
    previousQuestion,
    currentIndex,
    totalQuestions,
    canGoPrevious,
    canGoNext,
  } = useQuizContext();

  return (
    <div className="mt-8 flex items-center justify-between">
      <button
        type="button"
        onClick={previousQuestion}
        disabled={!canGoPrevious}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ← Anterior
      </button>

      <span className="text-sm text-slate-500">
        Pregunta {currentIndex + 1} de {totalQuestions}
      </span>

      <button
        type="button"
        onClick={nextQuestion}
        disabled={!canGoNext}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Siguiente →
      </button>
    </div>
  );
}
