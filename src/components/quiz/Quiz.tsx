"use client";

import type { Quiz } from "@/types/quiz";
import Question from "./Question";
import Navigation from "./Navigation";
import useQuiz from "@/hooks/useQuiz";

interface QuizProps {
  quiz: Quiz;
}

export default function Quiz({ quiz }: QuizProps) {
  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    canGoNext,
    canGoPrevious,
    nextQuestion,
    previousQuestion,
  } = useQuiz(quiz);

  return (
    <>
      {/*<Progress />*/}

      <Question question={currentQuestion} />

      <Navigation
        totalQuestions={totalQuestions}
        currentIndex={currentIndex}
        canGoNext={canGoNext}
        canGoPrevious={canGoPrevious}
        onNext={nextQuestion}
        onPrevious={previousQuestion}
      />
    </>
  );
}
