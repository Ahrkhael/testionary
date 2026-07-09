import { useState } from "react";
import type { Quiz } from "@/types/quiz";

export default function useQuiz(quiz: Quiz) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = quiz.questions[currentIndex];

  const nextQuestion = () => {
    setCurrentIndex((i) => Math.min(i + 1, quiz.questions.length - 1));
  };

  const previousQuestion = () => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  return {
    currentIndex,
    currentQuestion,
    nextQuestion,
    previousQuestion,
  };
}
