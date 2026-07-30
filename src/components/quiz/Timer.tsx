"use client";

import { useQuizContext } from "./QuizContext";

export default function Timer() {
  const { seconds, isRunning, stopTimer } = useQuizContext();

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl font-bold">
        {minutes.toString().padStart(2, "0")}:
        {remainingSeconds.toString().padStart(2, "0")}
      </p>

      {isRunning ? (
        <button
          onClick={stopTimer}
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Finalizar cuestionario
        </button>
      ) : (
        <p className="text-green-600 font-semibold">Cuestionario finalizado</p>
      )}
    </div>
  );
}
