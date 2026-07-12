import type { Answer } from "@/types/quiz";

type AnswerState = "default" | "selected" | "correct" | "incorrect";

interface AnswerProps {
  answer: Answer;
  state: AnswerState;
  onSelect: (id: number) => void;
  isAnswered: boolean;
}

export default function AnswerItem({
  answer,
  state,
  onSelect,
  isAnswered,
}: AnswerProps) {
  const styles = {
    default: isAnswered
      ? "border-blue-300 text-blue-900"
      : "border-blue-300 text-blue-900 hover:border-blue-400 hover:bg-blue-50",

    selected: "border-blue-500 bg-blue-50 text-blue-900",

    correct: "border-green-500 bg-green-50 text-green-700",

    incorrect: "border-red-500 bg-red-50 text-red-700",
  };

  return (
    <button
      type="button"
      onClick={() => onSelect(answer.id)}
      className={`flex w-full items-center justify-between rounded-lg border p-4 text-left transition ${styles[state]}`}
    >
      <span className="text-xl">{answer.text}</span>

      {state === "correct" && <span className="text-xl font-bold">✓</span>}

      {state === "incorrect" && <span className="text-xl font-bold">❌</span>}
    </button>
  );
}
