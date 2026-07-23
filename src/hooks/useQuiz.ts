import { useState } from "react";
import type { Quiz, AnswerState } from "@/types/quiz";

import useTimer from "./useTimer";

interface UserAnswer {
  selectedAnswerId: number | null;
  confirmed: boolean;
}

export default function useQuiz(quiz: Quiz) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = quiz.questions[currentIndex];

  const nextQuestion = () => {
    setCurrentIndex((i) => Math.min(i + 1, quiz.questions.length - 1));
  };

  const previousQuestion = () => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  // Estado de las respuestas del usuario
  const [answers, setAnswers] = useState<Record<number, UserAnswer>>(() =>
    Object.fromEntries(
      quiz.questions.map((question) => [
        question.id,
        {
          selectedAnswerId: null,
          confirmed: false,
        },
      ]),
    ),
  );

  const currentAnswer = answers[currentQuestion.id];

  const selectAnswer = (answerId: number) => {
    if (currentAnswer.confirmed) {
      return;
    }

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...currentAnswer,
        selectedAnswerId: answerId,
      },
    }));
  };

  const confirmAnswer = () => {
    if (currentAnswer.selectedAnswerId === null) {
      return;
    }

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...currentAnswer,
        confirmed: true,
      },
    }));
  };

  const getAnswerState = (answerId: number): AnswerState => {
    const answer = currentQuestion.answers.find((a) => a.id === answerId);

    if (!answer) {
      return "default";
    }

    // Antes de confirmar
    if (!currentAnswer.confirmed) {
      return currentAnswer.selectedAnswerId === answerId
        ? "selected"
        : "default";
    }

    // Después de confirmar
    if (answer.isCorrect) {
      return "correct";
    }

    if (currentAnswer.selectedAnswerId === answerId) {
      return "incorrect";
    }

    return "default";
  };

  // Timer del Quiz
  const timer = useTimer(`quiz-${quiz.id}-startedAt`);

  return {
    currentIndex,
    currentQuestion,
    totalQuestions: quiz.questions.length,

    canGoNext: currentIndex < quiz.questions.length - 1,
    canGoPrevious: currentIndex > 0,

    nextQuestion,
    previousQuestion,

    selectedAnswerId: currentAnswer.selectedAnswerId,
    isAnswered: currentAnswer.confirmed,

    selectAnswer,
    confirmAnswer,

    getAnswerState,

    seconds: timer.seconds,
    isRunning: timer.isRunning,
    stopTimer: timer.stop,
    startTimer: timer.start,
    resetTimer: timer.reset,
  };
}
