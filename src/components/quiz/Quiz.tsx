"use client";

import type { Quiz } from "@/types/quiz";

import { QuizProvider } from "./QuizContext";

import Question from "./Question";
import Navigation from "./Navigation";
import Timer from "./Timer";

interface QuizProps {
  quiz: Quiz;
}

export default function Quiz({ quiz }: QuizProps) {
  return (
    <QuizProvider quiz={quiz}>
      {/*<Progress />*/}

      <Question />

      <Navigation />

      <Timer />
    </QuizProvider>
  );
}
