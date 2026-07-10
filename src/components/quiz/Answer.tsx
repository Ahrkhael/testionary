import type { Answer } from "@/types/quiz";

interface AnswerProps {
  answer: Answer;
}

export default function AnswerItem({ answer }: AnswerProps) {
  return (
    <button className="w-full rounded-lg border p-4 text-left hover:bg-blue-600">
      {answer.text}
    </button>
  );
}
