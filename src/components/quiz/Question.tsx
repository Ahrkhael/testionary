import type { Question } from "@/types/quiz";
import Answers from "./Answers";

interface QuestionProps {
  question: Question;
}

export default function Question({ question }: QuestionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{question.text}</h2>

      <Answers answers={question.answers} />
    </section>
  );
}
