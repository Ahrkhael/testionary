"use client";

import type { Quiz } from "@/types/quiz";
import Question from "./Question";
import useQuiz from "@/hooks/useQuiz";

interface QuizProps {
  quiz: Quiz;
}

export default function Quiz({ quiz }: QuizProps) {
  const { currentQuestion, currentIndex, nextQuestion, previousQuestion } =
    useQuiz(quiz);

  return (
    <>
      {/*<Progress />*/}

      <Question question={currentQuestion} />

      {/*<Navigation onNext={nextQuestion} onPrevious={previousQuestion} />*/}
    </>
  );
}
