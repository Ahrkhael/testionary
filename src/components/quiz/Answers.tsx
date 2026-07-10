import type { Answer } from "@/types/quiz";
import AnswerItem from "./Answer";

interface AnswersProps {
  answers: Answer[];
}

export default function Answers({ answers }: AnswersProps) {
  return (
    <ul className="space-y-3">
      {answers.map((answer) => (
        <li key={answer.id}>
          <AnswerItem answer={answer} />
        </li>
      ))}
    </ul>
  );
}
