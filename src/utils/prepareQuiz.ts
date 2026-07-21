// utils/prepareQuiz.ts
import { shuffle } from "./shuffle";
import { createRng } from "./createRng";
import type { Quiz } from "@/types/quiz";

export default function prepareQuiz(quiz: Quiz, seed: string): Quiz {
  const random = createRng(seed);

  return {
    ...quiz,
    questions: shuffle(
      quiz.questions.map((question) => ({
        ...question,
        answers: shuffle(question.answers, random),
      })),
      random,
    ),
  };
}
