import type { Question } from "@/types/quiz";
import Answers from "./Answers";

import { useQuizContext } from "./QuizContext";

export default function Question() {
  const {
    currentQuestion,
    getAnswerState,
    selectAnswer,
    confirmAnswer,
    selectedAnswerId,
    isAnswered,
  } = useQuizContext();

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{currentQuestion.text}</h2>

      <Answers
        answers={currentQuestion.answers}
        isAnswered={isAnswered}
        getAnswerState={getAnswerState}
        onSelectAnswer={selectAnswer}
      />

      <button
        type="button"
        onClick={confirmAnswer}
        disabled={selectedAnswerId === null || isAnswered}
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Comprobar respuesta
      </button>
    </section>
  );
}
