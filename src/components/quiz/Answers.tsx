import type { Answer, AnswerState } from "@/types/quiz";
import AnswerItem from "./Answer";

interface AnswersProps {
  answers: Answer[];
  isAnswered: boolean;
  getAnswerState: (answerId: number) => AnswerState;
  onSelectAnswer: (answerId: number) => void;
}

export default function Answers({
  answers,
  isAnswered,
  getAnswerState,
  onSelectAnswer,
}: AnswersProps) {
  return (
    <ul className="space-y-3">
      {answers.map((answer) => (
        <li key={answer.id}>
          <AnswerItem
            answer={answer}
            state={getAnswerState(answer.id)}
            onSelect={onSelectAnswer}
            isAnswered={isAnswered}
          />
        </li>
      ))}
    </ul>
  );
}
