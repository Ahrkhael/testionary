"use client";

import type { Quiz } from "@/types/quiz";

import { QuizProvider } from "./QuizContext";

import dynamic from "next/dynamic";

import Question from "./Question";
import Navigation from "./Navigation";

const Timer = dynamic(() => import("./Timer"), { ssr: false });

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
